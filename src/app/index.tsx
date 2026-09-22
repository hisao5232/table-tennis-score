import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Vibration,
  Modal,
  TextInput,
} from 'react-native';
import { styles } from '../styles/scoreStyle';

export default function App() {
  // 画面の「左」「右」に配置されているプレイヤーを管理（初期状態: 左=A, 右=B）
  const [leftPlayer, setLeftPlayer] = useState<'A' | 'B'>('A');
  const [rightPlayer, setRightPlayer] = useState<'A' | 'B'>('B');

  // プレイヤー名管理
  const [nameA, setNameA] = useState<string>('PLAYER A');
  const [nameB, setNameB] = useState<string>('PLAYER B');

  // 名前編集モーダル用状態
  const [editingTarget, setEditingTarget] = useState<'A' | 'B' | null>(null);
  const [tempName, setTempName] = useState<string>('');

  // 1ゲーム内のポイントスコア
  const [scoreA, setScoreA] = useState<number>(0);
  const [scoreB, setScoreB] = useState<number>(0);

  // 獲得セット数（ゲーム数）
  const [setsA, setSetsA] = useState<number>(0);
  const [setsB, setSetsB] = useState<number>(0);

  // 初期サーバー管理
  const [initialServer, setInitialServer] = useState<'A' | 'B'>('A');

  // 勝者モーダルの表示フラグ
  const [winner, setWinner] = useState<'A' | 'B' | null>(null);

  // サーバーの判定（合計得点とデュース考慮）
  const getCurrentServer = (a: number, b: number, startServer: 'A' | 'B'): 'A' | 'B' => {
    const totalScore = a + b;
    const isDeuce = a >= 10 && b >= 10;

    let switches = 0;
    if (isDeuce) {
      const deucePoints = totalScore - 20;
      switches = 10 + deucePoints;
    } else {
      switches = Math.floor(totalScore / 2);
    }

    return switches % 2 === 0 ? startServer : startServer === 'A' ? 'B' : 'A';
  };

  const currentServer = getCurrentServer(scoreA, scoreB, initialServer);

  // 11点先取（デュース時は2点差）の勝利チェック関数
  const checkGameWinner = (newScoreA: number, newScoreB: number) => {
    if (newScoreA >= 11 && newScoreA - newScoreB >= 2) {
      setWinner('A');
      setSetsA((prev) => prev + 1);
      Vibration.vibrate([0, 100, 50, 200, 50, 300]);
      return true;
    }
    if (newScoreB >= 11 && newScoreB - newScoreA >= 2) {
      setWinner('B');
      setSetsB((prev) => prev + 1);
      Vibration.vibrate([0, 100, 50, 200, 50, 300]);
      return true;
    }
    return false;
  };

  // 加点処理
  const addScoreA = () => {
    const next = scoreA + 1;
    setScoreA(next);
    Vibration.vibrate(40);
    checkGameWinner(next, scoreB);
  };

  const addScoreB = () => {
    const next = scoreB + 1;
    setScoreB(next);
    Vibration.vibrate(40);
    checkGameWinner(scoreA, next);
  };

  // 減点処理
  const subScoreA = () => {
    if (scoreA > 0) {
      setScoreA((prev) => prev - 1);
      Vibration.vibrate(20);
    }
  };

  const subScoreB = () => {
    if (scoreB > 0) {
      setScoreB((prev) => prev - 1);
      Vibration.vibrate(20);
    }
  };

  // 誤ってセットを獲得した場合の「1点戻る（取り消し）」処理
  const undoWinner = () => {
    if (winner === 'A') {
      setSetsA((prev) => Math.max(0, prev - 1));
      setScoreA((prev) => Math.max(0, prev - 1));
    } else if (winner === 'B') {
      setSetsB((prev) => Math.max(0, prev - 1));
      setScoreB((prev) => Math.max(0, prev - 1));
    }
    setWinner(null);
    Vibration.vibrate(30);
  };

  // 名前変更ダイアログを開く
  const openNameEditor = (target: 'A' | 'B') => {
    setEditingTarget(target);
    setTempName(target === 'A' ? nameA : nameB);
  };

  // 名前変更の保存
  const saveName = () => {
    if (tempName.trim() !== '') {
      if (editingTarget === 'A') setNameA(tempName.trim());
      if (editingTarget === 'B') setNameB(tempName.trim());
    }
    setEditingTarget(null);
  };

  // 次のゲームに進む（チェンジエンド：左右の配置を反転＆サーブ権自動交代）
  const handleNextGame = () => {
    setScoreA(0);
    setScoreB(0);
    setWinner(null);

    // コートチェンジ（左右のプレイヤー入れ替え）
    setLeftPlayer((prev) => (prev === 'A' ? 'B' : 'A'));
    setRightPlayer((prev) => (prev === 'A' ? 'B' : 'A'));

    // サーブ権の交代
    setInitialServer((prev) => (prev === 'A' ? 'B' : 'A'));
  };

  // 手動コートチェンジボタン（試合途中の変更用）
  const toggleCourtChange = () => {
    setLeftPlayer((prev) => (prev === 'A' ? 'B' : 'A'));
    setRightPlayer((prev) => (prev === 'A' ? 'B' : 'A'));
    Vibration.vibrate(30);
  };

  // 全体リセット
  const resetMatch = () => {
    setScoreA(0);
    setScoreB(0);
    setSetsA(0);
    setSetsB(0);
    setWinner(null);
    setInitialServer('A');
    setLeftPlayer('A');
    setRightPlayer('B');
    Vibration.vibrate([0, 80, 40, 80]);
  };

  const toggleInitialServer = () => {
    if (scoreA === 0 && scoreB === 0) {
      setInitialServer((prev) => (prev === 'A' ? 'B' : 'A'));
      Vibration.vibrate(30);
    }
  };

  const isDeuce = scoreA >= 10 && scoreB >= 10 && scoreA === scoreB;

  // 左右に表示するデータを動的に取得するヘルパー関数
  const getPlayerData = (target: 'A' | 'B') => {
    const isA = target === 'A';
    return {
      name: isA ? nameA : nameB,
      score: isA ? scoreA : scoreB,
      sets: isA ? setsA : setsB,
      isServe: currentServer === target,
      addScore: isA ? addScoreA : addScoreB,
      subScore: isA ? subScoreA : subScoreB,
      openEditor: () => openNameEditor(target),
    };
  };

  const leftData = getPlayerData(leftPlayer);
  const rightData = getPlayerData(rightPlayer);

  return (
    <View style={styles.container}>
      {/* ヘッダーエリア（3カラム構成でSETSを中央に固定） */}
      <View style={styles.header}>
        {/* 左側：リセットボタン */}
        <View style={styles.headerSide}>
          <TouchableOpacity style={styles.resetButton} onPress={resetMatch}>
            <Text style={styles.resetText}>全リセット</Text>
          </TouchableOpacity>
        </View>

        {/* 中央：獲得セット数表示 */}
        <View style={styles.setCountContainer}>
          <Text style={styles.setCountText}>{leftData.sets}</Text>
          <Text style={styles.setCountLabel}>SETS</Text>
          <Text style={styles.setCountText}>{rightData.sets}</Text>
        </View>

        {/* 右側：エンド交代ボタン */}
        <View style={styles.headerSide}>
          <TouchableOpacity style={styles.resetButton} onPress={toggleCourtChange}>
            <Text style={styles.resetText}>⇄ エンド</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* スコア表示エリア（左右配置） */}
      <View style={styles.scoreContainer}>
        {/* 左側プレイヤー */}
        <TouchableOpacity
          style={[
            styles.playerCard,
            styles.cardA,
            leftData.isServe && styles.activeServeCard,
          ]}
          onPress={leftData.addScore}
          activeOpacity={0.8}
        >
          {leftData.isServe && (
            <View style={[styles.serveBadge, styles.serveBadgeA]}>
              <Text style={styles.serveBadgeText}>🏓 SERVE</Text>
            </View>
          )}

          <TouchableOpacity
            style={styles.nameContainer}
            onPress={leftData.openEditor}
            activeOpacity={0.6}
          >
            <Text style={styles.playerLabel} numberOfLines={1}>
              {leftData.name} ✏️
            </Text>
          </TouchableOpacity>

          {/* スコア表示 ＆ スコア内「-1点」ボタン */}
          <View style={styles.scoreInnerContainer}>
            <Text style={styles.scoreText}>{leftData.score}</Text>
            <TouchableOpacity
              style={styles.inlineSubButton}
              onPress={leftData.subScore}
              activeOpacity={0.7}
            >
              <Text style={styles.inlineSubButtonText}>- 1点</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.tapNotice}>タップで +1</Text>
        </TouchableOpacity>

        {/* 右側プレイヤー */}
        <TouchableOpacity
          style={[
            styles.playerCard,
            styles.cardB,
            rightData.isServe && styles.activeServeCard,
          ]}
          onPress={rightData.addScore}
          activeOpacity={0.8}
        >
          {rightData.isServe && (
            <View style={[styles.serveBadge, styles.serveBadgeB]}>
              <Text style={styles.serveBadgeText}>🏓 SERVE</Text>
            </View>
          )}

          <TouchableOpacity
            style={styles.nameContainer}
            onPress={rightData.openEditor}
            activeOpacity={0.6}
          >
            <Text style={styles.playerLabel} numberOfLines={1}>
              {rightData.name} ✏️
            </Text>
          </TouchableOpacity>

          {/* スコア表示 ＆ スコア内「-1点」ボタン */}
          <View style={styles.scoreInnerContainer}>
            <Text style={styles.scoreText}>{rightData.score}</Text>
            <TouchableOpacity
              style={styles.inlineSubButton}
              onPress={rightData.subScore}
              activeOpacity={0.7}
            >
              <Text style={styles.inlineSubButtonText}>- 1点</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.tapNotice}>タップで +1</Text>
        </TouchableOpacity>
      </View>

      {/* 下部通知・状態バー */}
      <View style={styles.footerBar}>
        {isDeuce ? (
          <Text style={[styles.footerText, { color: '#F59E0B', fontWeight: 'bold' }]}>
            🔥 デュース！2点差がつくまで1点交代で継続します
          </Text>
        ) : scoreA === 0 && scoreB === 0 ? (
          <TouchableOpacity onPress={toggleInitialServer}>
            <Text style={styles.footerText}>
              ※タップで最初のサーブ権を交代（現在: {initialServer === 'A' ? nameA : nameB}）
            </Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.footerText}>11点先取（2点差でセット獲得）</Text>
        )}
      </View>

      {/* プレイヤー名編集モーダル */}
      <Modal visible={editingTarget !== null} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeaderTitle}>プレイヤー名の編集</Text>
            <TextInput
              style={styles.nameInput}
              value={tempName}
              onChangeText={setTempName}
              placeholder="名前を入力"
              placeholderTextColor="#64748B"
              maxLength={12}
              autoFocus
            />
            <View style={styles.nameModalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setEditingTarget(null)}
              >
                <Text style={styles.cancelButtonText}>キャンセル</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton} onPress={saveName}>
                <Text style={styles.saveButtonText}>保存</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* ゲーム決着時の勝者ポップアップ */}
      <Modal visible={winner !== null} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.winnerTitle}>GAME WINNER!</Text>
            <Text style={styles.winnerName}>
              {winner === 'A' ? nameA : nameB}
            </Text>
            <Text style={styles.finalScoreText}>
              スコア: {scoreA} - {scoreB}
            </Text>

            <TouchableOpacity style={styles.nextGameButton} onPress={handleNextGame}>
              <Text style={styles.nextGameText}>チェンジエンドして次のゲームへ</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.undoWinnerButton} onPress={undoWinner}>
              <Text style={styles.undoWinnerText}>↩ 誤タップを取り消す（1点戻る）</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

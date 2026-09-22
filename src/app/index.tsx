import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Vibration } from 'react-native';
// 作成したスタイルファイルをインポート
import { styles } from '../styles/scoreStyle';

export default function App() {
  const [scoreA, setScoreA] = useState<number>(0);
  const [scoreB, setScoreB] = useState<number>(0);

  const addScoreA = () => {
    setScoreA((prev) => prev + 1);
    Vibration.vibrate(40);
  };

  const addScoreB = () => {
    setScoreB((prev) => prev + 1);
    Vibration.vibrate(40);
  };

  const resetScore = () => {
    setScoreA(0);
    setScoreB(0);
    Vibration.vibrate([0, 80, 40, 80]);
  };

  return (
    <View style={styles.container}>
      {/* ヘッダーエリア */}
      <View style={styles.header}>
        <Text style={styles.title}>卓球スコアボード</Text>
        <TouchableOpacity style={styles.resetButton} onPress={resetScore}>
          <Text style={styles.resetText}>リセット</Text>
        </TouchableOpacity>
      </View>

      {/* スコア表示エリア（横並び） */}
      <View style={styles.scoreContainer}>
        {/* PLAYER A */}
        <TouchableOpacity style={[styles.playerCard, styles.cardA]} onPress={addScoreA}>
          <Text style={styles.playerLabel}>PLAYER A</Text>
          <Text style={styles.scoreText}>{scoreA}</Text>
          <Text style={styles.tapNotice}>タップで+1点</Text>
        </TouchableOpacity>

        {/* PLAYER B */}
        <TouchableOpacity style={[styles.playerCard, styles.cardB]} onPress={addScoreB}>
          <Text style={styles.playerLabel}>PLAYER B</Text>
          <Text style={styles.scoreText}>{scoreB}</Text>
          <Text style={styles.tapNotice}>タップで+1点</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

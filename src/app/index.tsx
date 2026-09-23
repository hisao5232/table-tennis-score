import React, { useState } from 'react';
import { View, Vibration } from 'react-native';
import { Header } from '../components/Header';
import { PlayerCard } from '../components/PlayerCard';
import { FooterBar } from '../components/FooterBar';
import { NameEditModal } from '../components/NameEditModal';
import { WinnerModal } from '../components/WinnerModal';
import { styles } from '../styles/scoreStyle';

export default function App() {
  const [leftPlayer, setLeftPlayer] = useState<'A' | 'B'>('A');
  const [rightPlayer, setRightPlayer] = useState<'A' | 'B'>('B');

  const [nameA, setNameA] = useState<string>('PLAYER A');
  const [nameB, setNameB] = useState<string>('PLAYER B');

  const [editingTarget, setEditingTarget] = useState<'A' | 'B' | null>(null);
  const [tempName, setTempName] = useState<string>('');

  const [scoreA, setScoreA] = useState<number>(0);
  const [scoreB, setScoreB] = useState<number>(0);

  const [setsA, setSetsA] = useState<number>(0);
  const [setsB, setSetsB] = useState<number>(0);

  const [initialServer, setInitialServer] = useState<'A' | 'B'>('A');
  const [winner, setWinner] = useState<'A' | 'B' | null>(null);

  const getCurrentServer = (a: number, b: number, startServer: 'A' | 'B'): 'A' | 'B' => {
    const totalScore = a + b;
    const isDeuce = a >= 10 && b >= 10;
    let switches = isDeuce ? 10 + (totalScore - 20) : Math.floor(totalScore / 2);
    return switches % 2 === 0 ? startServer : startServer === 'A' ? 'B' : 'A';
  };

  const currentServer = getCurrentServer(scoreA, scoreB, initialServer);

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

  const openNameEditor = (target: 'A' | 'B') => {
    setEditingTarget(target);
    setTempName(target === 'A' ? nameA : nameB);
  };

  const saveName = () => {
    if (tempName.trim() !== '') {
      if (editingTarget === 'A') setNameA(tempName.trim());
      if (editingTarget === 'B') setNameB(tempName.trim());
    }
    setEditingTarget(null);
  };

  const handleNextGame = () => {
    setScoreA(0);
    setScoreB(0);
    setWinner(null);
    setLeftPlayer((prev) => (prev === 'A' ? 'B' : 'A'));
    setRightPlayer((prev) => (prev === 'A' ? 'B' : 'A'));
    setInitialServer((prev) => (prev === 'A' ? 'B' : 'A'));
  };

  const toggleCourtChange = () => {
    setLeftPlayer((prev) => (prev === 'A' ? 'B' : 'A'));
    setRightPlayer((prev) => (prev === 'A' ? 'B' : 'A'));
    Vibration.vibrate(30);
  };

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

  const getPlayerData = (target: 'A' | 'B') => {
    const isA = target === 'A';
    return {
      playerType: target,
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
  const isDeuce = scoreA >= 10 && scoreB >= 10 && scoreA === scoreB;

  return (
    <View style={styles.container}>
      <Header
        leftSets={leftData.sets}
        rightSets={rightData.sets}
        onReset={resetMatch}
        onCourtChange={toggleCourtChange}
      />

      <View style={styles.scoreContainer}>
        <PlayerCard data={leftData} />
        <PlayerCard data={rightData} />
      </View>

      <FooterBar
        isDeuce={isDeuce}
        isStartOfGame={scoreA === 0 && scoreB === 0}
        initialServerName={initialServer === 'A' ? nameA : nameB}
        onToggleInitialServer={toggleInitialServer}
      />

      <NameEditModal
        visible={editingTarget !== null}
        tempName={tempName}
        onChangeName={setTempName}
        onSave={saveName}
        onCancel={() => setEditingTarget(null)}
      />

      <WinnerModal
        winnerName={winner === 'A' ? nameA : winner === 'B' ? nameB : null}
        scoreA={scoreA}
        scoreB={scoreB}
        onNextGame={handleNextGame}
        onUndoWinner={undoWinner}
      />
    </View>
  );
}

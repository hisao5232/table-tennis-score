import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { styles } from '../styles/scoreStyle';

interface WinnerModalProps {
  winnerName: string | null;
  scoreA: number;
  scoreB: number;
  onNextGame: () => void;
  onUndoWinner: () => void;
}

export const WinnerModal: React.FC<WinnerModalProps> = ({
  winnerName,
  scoreA,
  scoreB,
  onNextGame,
  onUndoWinner,
}) => {
  return (
    <Modal visible={winnerName !== null} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.winnerTitle}>GAME WINNER!</Text>
          <Text style={styles.winnerName}>{winnerName}</Text>
          <Text style={styles.finalScoreText}>
            スコア: {scoreA} - {scoreB}
          </Text>

          <TouchableOpacity style={styles.nextGameButton} onPress={onNextGame}>
            <Text style={styles.nextGameText}>チェンジエンドして次のゲームへ</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.undoWinnerButton} onPress={onUndoWinner}>
            <Text style={styles.undoWinnerText}>↩ 誤タップを取り消す（1点戻る）</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

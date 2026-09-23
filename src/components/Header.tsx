import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/scoreStyle';

interface HeaderProps {
  leftSets: number;
  rightSets: number;
  onReset: () => void;
  onCourtChange: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  leftSets,
  rightSets,
  onReset,
  onCourtChange,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerSide}>
        <TouchableOpacity style={styles.resetButton} onPress={onReset}>
          <Text style={styles.resetText}>全リセット</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.setCountContainer}>
        <Text style={styles.setCountText}>{leftSets}</Text>
        <Text style={styles.setCountLabel}>SETS</Text>
        <Text style={styles.setCountText}>{rightSets}</Text>
      </View>

      <View style={styles.headerSide}>
        <TouchableOpacity style={styles.resetButton} onPress={onCourtChange}>
          <Text style={styles.resetText}>⇄ エンド</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

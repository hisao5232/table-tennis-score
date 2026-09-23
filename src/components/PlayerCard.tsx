import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/scoreStyle';

interface PlayerData {
  playerType: 'A' | 'B';
  name: string;
  score: number;
  isServe: boolean;
  addScore: () => void;
  subScore: () => void;
  openEditor: () => void;
}

export const PlayerCard: React.FC<{ data: PlayerData }> = ({ data }) => {
  const isA = data.playerType === 'A';

  return (
    <TouchableOpacity
      style={[
        styles.playerCard,
        isA ? styles.cardA : styles.cardB,
        data.isServe && styles.activeServeCard,
      ]}
      onPress={data.addScore}
      activeOpacity={0.8}
    >
      {/* 強調されたサーブ権表示バッジ */}
      {data.isServe && (
        <View style={styles.serveBadge}>
          <Text style={styles.serveBadgeText}>🏓 SERVE</Text>
        </View>
      )}

      {/* プレイヤー名 */}
      <TouchableOpacity
        style={styles.nameContainer}
        onPress={data.openEditor}
        activeOpacity={0.6}
      >
        <Text style={styles.playerLabel} numberOfLines={1}>
          {data.name} ✏️
        </Text>
      </TouchableOpacity>

      {/* スコア表示 & -1点ボタン */}
      <View style={styles.scoreInnerContainer}>
        <Text style={styles.scoreText}>{data.score}</Text>
        <TouchableOpacity
          style={styles.inlineSubButton}
          onPress={data.subScore}
          activeOpacity={0.7}
        >
          <Text style={styles.inlineSubButtonText}>- 1点</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.tapNotice}>タップで +1</Text>
    </TouchableOpacity>
  );
};

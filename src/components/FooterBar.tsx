import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/scoreStyle';

interface FooterBarProps {
  isDeuce: boolean;
  isStartOfGame: boolean;
  initialServerName: string;
  onToggleInitialServer: () => void;
}

export const FooterBar: React.FC<FooterBarProps> = ({
  isDeuce,
  isStartOfGame,
  initialServerName,
  onToggleInitialServer,
}) => {
  return (
    <View style={styles.footerBar}>
      {isDeuce ? (
        <Text style={[styles.footerText, { color: '#F59E0B', fontWeight: 'bold' }]}>
          🔥 デュース！2点差がつくまで1点交代で継続します
        </Text>
      ) : isStartOfGame ? (
        <TouchableOpacity onPress={onToggleInitialServer}>
          <Text style={styles.footerText}>
            ※タップで最初のサーブ権を交代（現在: {initialServerName}）
          </Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.footerText}>11点先取（2点差でセット獲得）</Text>
      )}
    </View>
  );
};

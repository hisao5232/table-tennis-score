import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827', // ダークバックグラウンド
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F9FAFB',
  },
  resetButton: {
    backgroundColor: '#374151',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  resetText: {
    color: '#F3F4F6',
    fontSize: 14,
    fontWeight: '600',
  },
  scoreContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
  },
  playerCard: {
    flex: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  cardA: {
    backgroundColor: '#991B1B', // PLAYER A (赤)
  },
  cardB: {
    backgroundColor: '#1E3A8A', // PLAYER B (青)
  },
  playerLabel: {
    color: '#E5E7EB',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  scoreText: {
    color: '#FFFFFF',
    fontSize: 96,
    fontWeight: '800',
    lineHeight: 100,
    marginVertical: 5,
  },
  tapNotice: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 12,
  },
});

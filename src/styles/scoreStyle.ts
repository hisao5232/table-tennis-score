import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerSide: {
    flex: 1,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#334155',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  resetText: {
    color: '#F8FAFC',
    fontSize: 13,
    fontWeight: 'bold',
  },
  setCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  setCountText: {
    color: '#38BDF8',
    fontSize: 28,
    fontWeight: '900',
  },
  setCountLabel: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: 'bold',
  },
  scoreContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    gap: 8,
  },
  playerCard: {
    flex: 1,
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  /* プレイヤーA: ダークブルー / プレイヤーB: ダークレッド（はっきりした対比） */
  cardA: {
    backgroundColor: '#1E293B',
  },
  cardB: {
    backgroundColor: '#881337',
  },
  /* サーブ権を持っている側のカード強調枠 */
  activeServeCard: {
    borderColor: '#FACC15',
  },
  /* サーブ権表示バッジの強調表示 */
  serveBadge: {
    position: 'absolute',
    top: 12,
    backgroundColor: '#FACC15',
    borderWidth: 2,
    borderColor: '#EAB308',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 10,
  },
  serveBadgeText: {
    color: '#0F172A',
    fontSize: 18, // SERVEの文字サイズを大きく
    fontWeight: '900',
    letterSpacing: 1,
  },
  nameContainer: {
    marginTop: 44,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 6,
  },
  playerLabel: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scoreInnerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreText: {
    color: '#FFFFFF',
    fontSize: 84,
    fontWeight: '900',
  },
  inlineSubButton: {
    marginTop: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  inlineSubButtonText: {
    color: '#CBD5E1',
    fontSize: 14,
    fontWeight: '600',
  },
  tapNotice: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: 12,
    marginBottom: 4,
  },
  footerBar: {
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#1E293B',
  },
  footerText: {
    color: '#94A3B8',
    fontSize: 13,
  },
  /* モーダル関連 */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#1E293B',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  modalHeaderTitle: {
    color: '#F8FAFC',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  nameInput: {
    width: '100%',
    backgroundColor: '#0F172A',
    color: '#F8FAFC',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
  },
  nameModalButtons: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#475569',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#F8FAFC',
    fontWeight: 'bold',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#0284C7',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  winnerTitle: {
    color: '#FACC15',
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 8,
  },
  winnerName: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  finalScoreText: {
    color: '#94A3B8',
    fontSize: 16,
    marginBottom: 24,
  },
  nextGameButton: {
    backgroundColor: '#16A34A',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  nextGameText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  undoWinnerButton: {
    paddingVertical: 10,
  },
  undoWinnerText: {
    color: '#94A3B8',
    fontSize: 13,
  },
});

import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    paddingTop: 10,
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  // ヘッダーを左右中央の3エリアに分割
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  headerSide: {
    width: 80,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#334155',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  resetText: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: 'bold',
  },
  setCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#334155',
  },
  setCountText: {
    color: '#38BDF8',
    fontSize: 22,
    fontWeight: 'bold',
    minWidth: 24,
    textAlign: 'center',
  },
  setCountLabel: {
    color: '#64748B',
    fontSize: 11,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  // スコアエリア
  scoreContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  playerCard: {
    flex: 1,
    borderRadius: 16,
    padding: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  cardA: {
    backgroundColor: '#1E1B4B',
  },
  cardB: {
    backgroundColor: '#064E3B',
  },
  activeServeCard: {
    borderWidth: 3,
    borderColor: '#F59E0B',
  },
  serveBadge: {
    position: 'absolute',
    top: 10,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  serveBadgeA: {
    backgroundColor: '#4338CA',
  },
  serveBadgeB: {
    backgroundColor: '#047857',
  },
  serveBadgeText: {
    color: '#F59E0B',
    fontSize: 11,
    fontWeight: 'bold',
  },
  nameContainer: {
    marginTop: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    maxWidth: '90%',
  },
  playerLabel: {
    color: '#F8FAFC',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // スコアと-1点ボタンのラップ用
  scoreInnerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
  },
  scoreText: {
    color: '#FFFFFF',
    fontSize: height < 400 ? 70 : 85, // 横画面・縦画面に応じて調整
    fontWeight: 'bold',
    includeFontPadding: false,
  },
  inlineSubButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginTop: -4,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  inlineSubButtonText: {
    color: '#CBD5E1',
    fontSize: 12,
    fontWeight: '600',
  },
  tapNotice: {
    color: '#94A3B8',
    fontSize: 11,
    marginBottom: 4,
  },
  footerBar: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    backgroundColor: '#1E293B',
    borderRadius: 8,
    marginTop: 8,
  },
  footerText: {
    color: '#94A3B8',
    fontSize: 12,
  },
  // モーダル関連
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    maxWidth: 360,
    backgroundColor: '#1E293B',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  modalHeaderTitle: {
    color: '#F8FAFC',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  nameInput: {
    width: '100%',
    backgroundColor: '#0F172A',
    color: '#F8FAFC',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#475569',
  },
  nameModalButtons: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 8,
    backgroundColor: '#475569',
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#F8FAFC',
    fontSize: 14,
  },
  saveButton: {
    flex: 1,
    paddingVertical: 8,
    backgroundColor: '#2563EB',
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  winnerTitle: {
    color: '#F59E0B',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  winnerName: {
    color: '#F8FAFC',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  finalScoreText: {
    color: '#94A3B8',
    fontSize: 14,
    marginBottom: 20,
  },
  nextGameButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  nextGameText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  undoWinnerButton: {
    paddingVertical: 8,
  },
  undoWinnerText: {
    color: '#94A3B8',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
});

import React from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/scoreStyle';

interface NameEditModalProps {
  visible: boolean;
  tempName: string;
  onChangeName: (text: string) => void;
  onSave: () => void;
  onCancel: () => void;
}

export const NameEditModal: React.FC<NameEditModalProps> = ({
  visible,
  tempName,
  onChangeName,
  onSave,
  onCancel,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalHeaderTitle}>プレイヤー名の編集</Text>
          <TextInput
            style={styles.nameInput}
            value={tempName}
            onChangeText={onChangeName}
            placeholder="名前を入力"
            placeholderTextColor="#64748B"
            maxLength={12}
            autoFocus
          />
          <View style={styles.nameModalButtons}>
            <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
              <Text style={styles.cancelButtonText}>キャンセル</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton} onPress={onSave}>
              <Text style={styles.saveButtonText}>保存</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

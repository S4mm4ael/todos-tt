import React, {useCallback, useState} from "react";
import {View, Text, TouchableOpacity, TextInput} from "react-native";
import styles from "./styles";
import CheckBox from "@react-native-community/checkbox";
import {CloseIcon, PencilIcon} from "../../../assets/svg";
import {COLORS} from "../../../constants/colors";
import {toDosStore} from "../../../stores";
import {DeleteDialog} from "./DeleteDialog";

interface ToDoListItemProps {
  id: number;
  description: string;
  done: boolean;
  openDeleteModal: () => void;
  bottomSheetDeleteModalRef: any;
  deleteNote: () => void;
}

export const ToDoItem: React.FC<ToDoListItemProps> = ({
  id,
  description,
  done,
  openDeleteModal,
  bottomSheetDeleteModalRef,
  deleteNote,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(description);
  const [todoDone, setTodoDone] = useState(done);

  const editToDos = async () => {
    await toDosStore.editToDo({
      id,
      description: newTitle,
      done: todoDone,
    });
  };

  const handleSaveTitle = () => {
    setIsEditing(false);
  };

  const editText = () => {
    editToDos();
    setIsEditing(!isEditing);
  };

  const deleteToDos = () => {
    openDeleteModal();
  };

  const closeDeleteModal = useCallback(() => {
    bottomSheetDeleteModalRef.current?.close();
  }, [bottomSheetDeleteModalRef]);

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <CheckBox
          value={done}
          onValueChange={(val) => {
            editToDos();
            setTodoDone(val);
          }}
          onCheckColor={COLORS.PRIMARY}
          onTintColor={COLORS.PRIMARY}
        />
        {isEditing ? (
          <TextInput
            style={styles.textInput}
            value={newTitle}
            onChangeText={(text) => setNewTitle(text)}
            onBlur={handleSaveTitle}
            autoFocus
          />
        ) : (
          <Text style={[styles.title, todoDone && styles.completedTitle]}>
            {newTitle}
          </Text>
        )}
      </View>
      <View style={styles.controlPanel}>
        <TouchableOpacity onPress={editText} style={styles.editButton}>
          <PencilIcon />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteToDos}>
          <CloseIcon color={COLORS.PRIMARY} />
        </TouchableOpacity>
      </View>
      <DeleteDialog
        description={description}
        bottomSheetModalRef={bottomSheetDeleteModalRef}
        closeModal={closeDeleteModal}
        deleteNote={deleteNote}
        id={id}
      />
    </View>
  );
};

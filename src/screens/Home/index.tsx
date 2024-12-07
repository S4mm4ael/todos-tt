import React from "react";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {useCallback, useEffect, useRef, useState} from "react";
import {FlatList, SafeAreaView, TouchableOpacity} from "react-native";
import {observer} from "mobx-react-lite";
import styles from "./styles";
import {COLORS} from "../../constants/colors";
import {BoxedContainer} from "../../components/Containers";
import {PlusIcon} from "../../assets/svg";
import toDosStore from "../../stores/ToDosStore";
import {AddDialog, ToDoItem} from "./components";

const Home = observer(() => {
  const getTodos = async () => {
    await toDosStore.getTodos();
  };

  useEffect(() => {
    getTodos();
  }, []);

  const bottomSheetDeleteModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetAddNotesModalRef = useRef<BottomSheetModal>(null);

  const openModal = useCallback(() => {
    bottomSheetAddNotesModalRef.current?.present();
  }, []);

  const closeModal = useCallback(() => {
    bottomSheetAddNotesModalRef.current?.close();
  }, []);

  const openDeleteModal = useCallback(() => {
    bottomSheetDeleteModalRef.current?.present();
  }, []);

  // const deleteNote = async () => {
  //   if (selectedId) {
  //     await toDosStore.deleteToDo(selectedId);
  //     bottomSheetDeleteModalRef.current?.close();
  //   }
  // };

  return (
    <SafeAreaView>
      <BoxedContainer style={styles.flex}>
        <FlatList
          data={toDosStore.todos}
          renderItem={({item}) => (
            <ToDoItem
              id={item.id}
              description={item.description}
              done={item.done}
              openDeleteModal={openDeleteModal}
              deleteNote={() => {}}
              bottomSheetDeleteModalRef={bottomSheetDeleteModalRef}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </BoxedContainer>
      <TouchableOpacity onPress={openModal} style={styles.floatingBtn}>
        <PlusIcon color={COLORS.PRIMARY} />
      </TouchableOpacity>
      <AddDialog
        bottomSheetModalRef={bottomSheetAddNotesModalRef}
        closeModal={closeModal}
        setTodos={(val) => {}}
      />
    </SafeAreaView>
  );
});

export default Home;

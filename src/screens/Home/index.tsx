import React from "react";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {useCallback, useEffect, useRef} from "react";
import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import {observer} from "mobx-react-lite";
import styles from "./styles";
import {COLORS} from "../../constants/colors";
import {BoxedContainer} from "../../components/Containers";
import {PlusIcon} from "../../assets/svg";
import toDosStore from "../../stores/ToDosStore";
import {AddDialog, ToDoItem} from "./components";

const ListEmptyComponent = () => {
  return (
    <BoxedContainer style={styles.emptyComponent}>
      <Text style={styles.emptyComponentText}>No notes yet</Text>
    </BoxedContainer>
  );
};

const Home = observer(() => {
  const DeleteDialogRef = useRef<BottomSheetModal>(null);
  const AddDialogRef = useRef<BottomSheetModal>(null);

  const openModal = useCallback(() => {
    AddDialogRef.current?.present();
  }, []);

  const closeModal = useCallback(() => {
    AddDialogRef.current?.close();
  }, []);

  const openDeleteModal = useCallback(() => {
    DeleteDialogRef.current?.present();
  }, []);

  useEffect(() => {
    const getTodos = async () => {
      await toDosStore.getTodos();
    };
    getTodos();
  }, []);

  const deleteNote = async (selectedId: number) => {
    if (selectedId) {
      await toDosStore.deleteToDo(selectedId);
      DeleteDialogRef.current?.close();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <BoxedContainer style={styles.flex}>
          <FlatList
            data={toDosStore.todosStored}
            renderItem={({item}) => (
              <ToDoItem
                id={item.id}
                description={item.description}
                done={item.done}
                openDeleteModal={openDeleteModal}
                deleteNote={deleteNote}
                bottomSheetDeleteModalRef={DeleteDialogRef}
              />
            )}
            contentContainerStyle={styles.contentContainer}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={ListEmptyComponent}
          />
        </BoxedContainer>
      </ScrollView>
      <TouchableOpacity onPress={openModal} style={styles.buttonContainer}>
        <PlusIcon color={COLORS.PRIMARY} />
      </TouchableOpacity>

      <AddDialog
        bottomSheetModalRef={AddDialogRef}
        closeModal={closeModal}
        setTodos={() => {
          toDosStore.getTodos();
        }}
      />
    </SafeAreaView>
  );
});

export default Home;

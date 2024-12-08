import {BottomSheetModal, BottomSheetView} from "@gorhom/bottom-sheet";
import {BottomSheetModalMethods} from "@gorhom/bottom-sheet/lib/typescript/types";
import React from "react";
import {Text} from "react-native";
import styles from "./styles";
import {BoxedContainer} from "../../../components/Containers";
import {BaseButton} from "../../../components/Buttons";
import {COLORS} from "../../../constants/colors";
import BackDrop from "./BackDrop";

type DeleteDialogProps = {
  bottomSheetModalRef: React.MutableRefObject<BottomSheetModalMethods | null>;
  closeModal: () => void;
  deleteNote: any;
  description: string;
  id: number;
};

const SNAP_POINTS = ["50%"];

export const DeleteDialog = ({
  bottomSheetModalRef,
  closeModal,
  deleteNote,
  id,
}: DeleteDialogProps) => {
  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={SNAP_POINTS}
      backdropComponent={(props) => (
        <BackDrop {...props} onPress={closeModal} />
      )}
    >
      <BottomSheetView style={styles.bottomSheet}>
        <BoxedContainer style={styles.modalBody}>
          <Text style={styles.modalTitle}>{"Delete?"}</Text>
          <Text style={styles.question}>
            {"Are you sure want to delete note?"}
          </Text>
        </BoxedContainer>
        <BaseButton
          title={"Delete"}
          onPress={() => deleteNote(id)}
          containerStyle={[styles.button, styles.deleteButton]}
          textStyle={{color: COLORS.WHITE}}
        />
      </BottomSheetView>
    </BottomSheetModal>
  );
};

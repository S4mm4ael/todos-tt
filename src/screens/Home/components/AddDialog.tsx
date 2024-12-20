import React from "react";
import {BottomSheetModal, BottomSheetView} from "@gorhom/bottom-sheet";
import {BottomSheetModalMethods} from "@gorhom/bottom-sheet/lib/typescript/types";
import {View, Text, KeyboardAvoidingView, Keyboard} from "react-native";
import {useForm} from "react-hook-form";
import styles from "./styles";
import {BoxedContainer} from "../../../components/Containers";
import {BaseButton} from "../../../components/Buttons";
import {ControlledInput} from "../../../components/Inputs";
import {COLORS} from "../../../constants/colors";
import {toDosStore} from "../../../stores";
import BackDrop from "./BackDrop";
import {observer} from "mobx-react-lite";
import {ValidationWarning} from "../../../components/ValidationWarning";
import {isIOS} from "../../../helpers";

type Props = {
  bottomSheetModalRef: React.MutableRefObject<BottomSheetModalMethods | null>;
  closeModal: () => void;
  setTodos: () => Promise<void>;
};

type FormData = {
  description: string;
};

const SNAP_POINTS = ["50%"];

export const AddDialog = observer(
  ({bottomSheetModalRef, closeModal, setTodos}: Props) => {
    const {control, handleSubmit, reset} = useForm<FormData>({
      defaultValues: {description: ""},
    });

    const onSubmit = async ({description}: {description: string}) => {
      Keyboard.dismiss();
      await toDosStore.fetchTodos(description);
      if (toDosStore.getError) return;
      setTodos().then(() => {
        reset();
        closeModal();
      });
    };

    const BackDropOnPress = () => {
      toDosStore.clearErrors();
      closeModal();
    };

    return (
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={SNAP_POINTS}
        backdropComponent={(props) => (
          <BackDrop {...props} onPress={BackDropOnPress} />
        )}
      >
        <KeyboardAvoidingView
          behavior={isIOS ? "padding" : "height"}
          style={styles.avoidContainer}
        >
          <BottomSheetView style={styles.bottomSheet}>
            <BoxedContainer style={styles.modalBody}>
              <Text style={styles.modalTitle}>{"Add a new note"}</Text>
              <View>
                <ControlledInput
                  control={control}
                  name="description"
                  placeholder={"Enter text here"}
                  variant="solid"
                  containerStyle={styles.input}
                />
              </View>
              {toDosStore.getError && (
                <ValidationWarning errorMessage={toDosStore.getError} />
              )}
            </BoxedContainer>
            <BaseButton
              title={"Add"}
              onPress={handleSubmit(onSubmit)}
              containerStyle={styles.button}
              textStyle={{color: COLORS.WHITE}}
            />
          </BottomSheetView>
        </KeyboardAvoidingView>
      </BottomSheetModal>
    );
  }
);

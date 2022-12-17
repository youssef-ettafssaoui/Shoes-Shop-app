import { useNavigation } from "@react-navigation/native";
import { Box, Button, Center, HStack, ScrollView, Text } from "native-base";
import React from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";
// import CartEmpty from "../Components/CartEmpty";
import CartIterms from "../Components/CartIterms";

function CartScreen() {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      {/* Header */}
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>
      {/* IF CART IS EMPTY
      <CartEmpty /> */}
      {/* CART ITEMS */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartIterms />
        {/* Total */}
        <Center mt={5}>
          <HStack
            rounded={50}
            justifyContent="space-between"
            bg={Colors.white}
            shadow={2}
            w="90%"
            pl={5}
            h={45}
            alignItems="center"
          >
            <Text>Total</Text>
            <Button
              px={10}
              h={45}
              rounded={50}
              bg={Colors.main}
              _text={{
                color: Colors.white,
                fontWeight: "semibold",
              }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              $356
            </Button>
          </HStack>
        </Center>

        {/* Checkout */}
        <Center px={5}>
          <Buttone
            onPress={() => navigation.navigate("Shipping")}
            bg={Colors.black}
            color={Colors.white}
            mt={10}
          >
            CHECKOUT
          </Buttone>
        </Center>
      </ScrollView>
    </Box>
  );
}

export default CartScreen;

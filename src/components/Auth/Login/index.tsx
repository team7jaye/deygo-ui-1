"use client";

import DGButton from "@/components/global/Button";
import DGInput from "@/components/global/Input";
import validationSchema from "@/utils/validationSchema";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";

const LoginCard: React.FC = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema.login}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid,
        /* and other goodies */
      }) => (
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Sign in to your account</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our cool{" "}
                <Text as="span" color={"blue.400"}>
                  features
                </Text>{" "}
                ✌️
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <Form>
                  <DGInput
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Enter Email Address"
                    error={touched.email ? errors.email : null}
                    onChange={handleChange}
                    value={values.email}
                  />
                  <DGInput
                    name="password"
                    type="password"
                    label="Password"
                    placeholder=""
                    error={touched.password ? errors.password : null}
                    onChange={handleChange}
                    value={values.password}
                  />

                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                    >
                      <Checkbox>Remember me</Checkbox>
                      <Text color={"blue.400"}>Forgot password?</Text>
                    </Stack>
                    <DGButton
                      type="submit"
                      bg={"primary.200"}
                      color={"white"}
                      _hover={{
                        bg: "primary.500",
                      }}
                      isLoading={isSubmitting}
                      disabled={!isValid || isSubmitting}
                    >
                      Login
                    </DGButton>
                  </Stack>
                </Form>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      )}
    </Formik>
  );
};

export default LoginCard;

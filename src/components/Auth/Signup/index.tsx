"use client";

import { Form, Formik } from "formik";

import DGButton from "@/components/global/Button";
import DGInput from "@/components/global/Input";
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
import validationSchema from "@/utils/validationSchema";
import Link from "next/link";
import { Routes } from "@/utils/routes";
import { useState } from "react";

interface Values {
  name: string;
  email: string;
  phoneNumber: string;
  pin: string;
}

const SignupCard: React.FC = () => {
  const [step, setStep] = useState(1);
  const initialValues: Values = {
    name: "",
    phoneNumber: "",
    email: "",
    pin: "",
  };

  const handleNext = (values: Values) => {
    if (step === 1) {
      setStep(2);
    } else {
      alert(JSON.stringify(values, null, 2));
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema.signup}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        handleNext(values);
        setSubmitting(false);
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
              <Heading fontSize={"4xl"}>Sign Up</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                To access this feature, please create an account
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
                  {step === 1 && (
                    <>
                      <DGInput
                        name="name"
                        type="text"
                        label="Name"
                        placeholder="Enter name"
                        error={touched.name ? errors.name : null}
                        onChange={handleChange}
                        value={values.name}
                      />
                      <DGInput
                        name="phoneNumber"
                        type="tel"
                        label="Phone Number"
                        placeholder="Enter Phone Number"
                        error={touched.phoneNumber ? errors.phoneNumber : null}
                        onChange={handleChange}
                        value={values.phoneNumber}
                      />
                      <DGInput
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="Enter Email Address"
                        error={touched.email ? errors.email : null}
                        onChange={handleChange}
                        value={values.email}
                      />

                      <Stack spacing={10}>
                        <Stack
                          direction={{ base: "column", sm: "row" }}
                          align={"start"}
                          justify={"space-between"}
                        >
                          {/* <DGInput  type="checkbox"/> */}
                          <Checkbox>Remember me</Checkbox>
                          <Link href={"/auth/login"}>
                            <Text color={"blue.400"} cursor="pointer">
                              Login instead
                            </Text>
                          </Link>
                        </Stack>

                        {/* <DGButton
                          type="submit"
                          bg={"primary.200"}
                          color={"white"}
                          _hover={{
                            bg: "primary.500",
                          }}
                          isLoading={isSubmitting}
                          // disabled
                          disabled={!isValid || isSubmitting} // Disable if not valid or submitting
                        >
                          Create Account
                        </DGButton> */}
                      </Stack>
                    </>
                  )}
                  {step === 2 && (
                    <DGInput
                      name="pin"
                      type="password"
                      label="Set Pin"
                      placeholder="Enter a 4-digit pin"
                      error={touched.pin ? errors.pin : null}
                      onChange={handleChange}
                      value={values.pin}
                    />
                  )}
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                    >
                      {step === 2 && (
                        <DGButton
                          onClick={handlePrevious}
                          bg={"gray.200"}
                          color={"black"}
                          _hover={{
                            bg: "gray.400",
                          }}
                        >
                          Back
                        </DGButton>
                      )}
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
                      {step === 1 ? "Next" : "Create Account"}
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

export default SignupCard;

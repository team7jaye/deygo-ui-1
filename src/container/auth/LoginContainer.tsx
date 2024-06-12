import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/navigation"; // Import useNavigation hook
import { Formik, Form } from "formik";
// import { handleClientLogin } from "services/auth";
import DGInput from "@/components/Input/DgInput";
import DGButton from "@/components/Button/Index";
import validationSchema from "@/utils/validationSchema";
import { Routes } from "@/utils/routes";

interface Values {
  email: string;
}

function LoginContainer() {
  const router = useRouter(); // Use useNavigation hook

  const [smallScreen] = useMediaQuery("(max-width: 800px)", {
    ssr: true,
    fallback: false,
  });

  const initialValues = {
    email: "",
  };

  async function handleSubmit(values: any) {
    // await handleClientLogin(values, () =>
      router.push(Routes.otp + "?emails=" + values.email)
    // );
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema.login}
      onSubmit={(values: Values) => handleSubmit(values)}
    >
      {({ values, errors, touched, handleChange, isSubmitting }) => (
        <>
          <Form>
            <DGInput
              id="email"
              type="email"
              label="Email address"
              placeholder="Enter email address"
              error={touched.email ? errors.email : null}
              onChange={handleChange}
              value={values.email}
            />

            <DGButton
              type="submit"
              colorScheme="primary"
              w="full"
              mt={4}
              py={6}
              isLoading={isSubmitting}
            >
              get otp
            </DGButton>
          </Form>

          <Box
            bgColor="secondary.20"
            borderRadius="md"
            mt={8}
            px={5}
            py={6}
            textAlign="left"
          >
            <Text>I am an agent</Text>
            <Text
              color="secondary.500"
              py={3}
              fontWeight={700}
              cursor="pointer"
              textTransform={"uppercase"}
              onClick={() => router.push(Routes.login)}
              display="flex"
              alignItems="center"
            >
              login to agent dashboard
            </Text>
          </Box>

          {smallScreen ? (
            <Text my={4} color="error.500" textAlign="left">
              Kindly log in on a desktop to access the agent dasboard
            </Text>
          ) : (
            ""
          )}
        </>
      )}
    </Formik>
  );
}

export default LoginContainer;

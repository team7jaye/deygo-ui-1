import SignupCard from '@/components/Auth/Signup'
import { AuthLayout } from '@/components/global/Layout'
import React from 'react'

type Props = {}

const DGSignupContainer = (props: Props) => {
  return (
    <AuthLayout><SignupCard/></AuthLayout>
  )
}

export default DGSignupContainer
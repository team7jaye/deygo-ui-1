import LoginCard from '@/components/Auth/Login'
import LoginForm from '@/components/Auth/Login'
import { AuthLayout } from '@/components/global/Layout'
import React from 'react'

type Props = {}

const DGLoginContainer = (props: Props) => {
  return (
    <AuthLayout><LoginCard/></AuthLayout>
  )
}

export default DGLoginContainer
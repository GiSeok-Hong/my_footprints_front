import React from 'react';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import BlackBg from '../common/blackBg';
import CloseBtn from '../common/closeBtn';
import { RootState } from '../../redux/reducers';

interface FormikFormInterface {
  openForm: () => void
}

interface FormikFormValues {
  email: string;
  password: string;
}

const FormikForm = ({ openForm }: FormikFormInterface) => {
  const state = useSelector((state: RootState) => state.formTypeReducer.formType);
  const initialValues: FormikFormValues = { email: '', password: '' };

  return (
    <BlackBg>
      <Formik
        initialValues={initialValues}
        validate={values => {
          const errors = { email: '', password: '' };

          // 이메일 타당성 검증
          if (!values.email) {
            errors.email = "이메일은 필수입니다.";
          } else if (!/[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i.test(values.email)) {
            errors.email = "올바른 이메일 형식이 아닙니다.";
          }
        }}
        onSubmit={(values, {setSubmitting}) => {
          console.log(values);
        }}
      >
        ㅇ
      </Formik>
    </BlackBg>
  )
}


export default FormikForm;

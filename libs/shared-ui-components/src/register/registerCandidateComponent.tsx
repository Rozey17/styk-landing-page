/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Spinner } from '@chakra-ui/spinner';
import { Field, Formik } from 'formik';
import { string, object } from 'yup';
import moment from 'moment';
import { useIntl } from 'react-intl';
import { ConfigProvider, DatePicker } from 'antd';
import { default as fr_locale } from 'antd/lib/locale/fr_FR';
import { default as en_locale } from 'antd/lib/locale/en_US';

export const RegisterCandidateComponent = () => {
  // const [loading, setLoading] = useState(false);
  const { formatMessage: f } = useIntl();
  const router = useRouter();
  const { locale } = useRouter();
  const dateFormat = locale === 'fr' ? 'DD/MM/YYYY' : 'MM-DD-YYYY';

  // const [userData, setUserData] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     await axios.post("/api/register", userData);
  //     router.replace("/profile");
  //   } catch (err) {
  //     console.log(err.response.data);
  //   }
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value });
  // };

  const initialValues = {
    username: '',
    email: '',
    password: '',
    phone: '',
    birthDate: '',
  };
  const validationSchema = object().shape({
    username: string()
      .required(f({ id: 'MANDATORY' }))
      .min(6, 'min 6 caractères')
      .max(30, 'max 30 caractères'),
    email: string()
      .required(f({ id: 'MANDATORY' }))
      .email('Email invalide'),
    password: string()
      .required(f({ id: 'MANDATORY' }))
      .min(6, 'min 6 caractères')
      .max(20, 'max 20 caractères'),
    phone: string().required(f({ id: 'MANDATORY' })),
    birthDate: string()
      .required(f({ id: 'MANDATORY' }))
      .test('birthDate', 'Le candidat doit être majeur', (value) => {
        return moment().diff(moment(value), 'years') >= 18;
      }),
  });

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (input) => {
        console.log(input);
        // try {
        //   await axios.post('/api/register', input);
        //   router.replace('/profile');
        // } catch (err) {
        //   console.log(err.response.data);
        // }
      }}
    >
      {({
        handleChange,
        setFieldValue,
        values,
        isValid,
        dirty,
        handleSubmit,
        errors,
        touched,
        handleBlur,
        isSubmitting,
      }) => (
        // <div
        //   className=" bg-cover bg-no-repeat "
        //   style={{
        //     backgroundImage: `url(/images/signs.jpg)`,
        //   }}
        // >
        <div className="bg-red-400">
          <div className="container my-auto max-w-md border-2 border-gray-200 p-3 bg-gray-50">
            <div className="text-center my-6">
              <h1 className="text-3xl font-semibold text-gray-700">
                Création de compte
              </h1>
              <p className="text-gray-500">S'enregistrer</p>
            </div>

            <div className="m-6">
              <form className="mb-4" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Nom
                  </label>
                  <Field
                    value={values.username || undefined}
                    as="input"
                    type="text"
                    name="familyName"
                    onChange={(e: any) => handleChange(e)}
                    placeholder="Votre nom "
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                  {touched.username && errors.username && (
                    <div className="text-red-500">{errors.username}</div>
                  )}
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Prénom
                  </label>
                  <Field
                    value={values.username || undefined}
                    as="input"
                    type="text"
                    name="givenName"
                    onChange={(e: any) => handleChange(e)}
                    placeholder="Votre prénom"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                  {touched.username && errors.username && (
                    <div className="text-red-500">{errors.username}</div>
                  )}
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Email
                  </label>
                  <Field
                    value={values.email || undefined}
                    as="input"
                    type="email"
                    name="email"
                    onChange={(e: any) => handleChange(e)}
                    placeholder="Votre email"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                  {touched.email && errors.email && (
                    <div className="text-sm text-red-500">{errors.email}</div>
                  )}
                </div>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-600 dark:text-gray-400">
                      Mot de passe
                    </label>
                  </div>
                  <Field
                    value={values.password || undefined}
                    as="input"
                    type="password"
                    name="password"
                    placeholder="Votre mot de passe"
                    onChange={(e: any) => handleChange(e)}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                  {touched.password && errors.password && (
                    <div className="text-sm text-red-500">
                      {errors.password}
                    </div>
                  )}
                </div>
                <div className="my-6">
                  <div style={{ marginBottom: 8 }}>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                      {f({ id: 'BIRTHDATE' })}
                    </label>
                  </div>
                  <ConfigProvider
                    locale={locale === 'fr' ? fr_locale : en_locale}
                  >
                    <Field
                      as={DatePicker}
                      format={dateFormat}
                      style={{ width: '100%' }}
                      value={values.birthDate}
                      onChange={(_: any, value: moment.MomentInput) =>
                        setFieldValue('birthDate', moment(value, dateFormat))
                      }
                      onBlur={handleBlur}
                      id="birthDate"
                      name="birthDate"
                      allowClear={false}
                    />
                    {errors.birthDate && touched.birthDate ? (
                      <div className="text-sm text-red-500">
                        {errors.birthDate}
                      </div>
                    ) : null}
                  </ConfigProvider>
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    {f({ id: 'PHONE' })}
                  </label>
                  <Field
                    value={values.email || undefined}
                    as="input"
                    type="text"
                    name="phone"
                    onChange={(e: any) => handleChange(e)}
                    placeholder={f({ id: 'PHONE' })}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                  {touched.phone && errors.phone && (
                    <div className="text-sm text-red-500">{errors.phone}</div>
                  )}
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out"
                  >
                    {/* {isSubmitting ? <Spinner /> : 'Créer compte'} */}
                    {isSubmitting ? '...' : 'Créer compte'}
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <img src="/images/signs.jpg" alt="" /> */}
        </div>
      )}
    </Formik>
  );
};

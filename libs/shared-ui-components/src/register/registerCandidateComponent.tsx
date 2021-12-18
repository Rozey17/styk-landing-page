/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Spinner } from '@chakra-ui/spinner';
import { Field, Formik } from 'formik';
import { string, object, date } from 'yup';
import moment from 'moment';
import { useIntl } from 'react-intl';
import { ConfigProvider, DatePicker, Select } from 'antd';
import { default as fr_locale } from 'antd/lib/locale/fr_FR';
import { default as en_locale } from 'antd/lib/locale/en_US';
import { CaretDownOutlined } from '@ant-design/icons';

const { Option } = Select;

export const RegisterCandidateComponent = () => {
  // const [loading, setLoading] = useState(false);
  const { formatMessage: f } = useIntl();
  const router = useRouter();
  const { locale } = useRouter();
  const dateFormat = locale === 'fr' ? 'DD/MM/YYYY' : 'MM-DD-YYYY';
  const nationalities = [
    { id: 1, name: 'congolaise' },
    { id: 2, name: 'gabonaise' },
    { id: 3, name: 'malienne' },
  ];
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
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    birthDate: '',
    birthPlace: '',
    address: '',
    profession: '',
    nationality: '',
  };
  const validationSchema = object().shape({
    firstname: string()
      .required(f({ id: 'MANDATORY' }))
      .min(6, 'min 6 caractères')
      .max(30, 'max 30 caractères'),
    lastname: string()
      .required(f({ id: 'MANDATORY' }))
      .min(6, 'min 6 caractères')
      .max(30, 'max 30 caractères'),
    email: string()
      .email(f({ id: 'INVALID_EMAIL' }))
      .nullable(),
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
    birthPlace: string().required(f({ id: 'MANDATORY' })),
    // identificationExpireOn: date()
    //   .required(f({ id: 'MANDATORY' }))
    //   .when(
    //     'identificationIssuedAt',
    //     (identificationIssuedAt, schema) =>
    //       identificationIssuedAt &&
    //       schema.min(identificationIssuedAt, f({ id: 'PREVIOUS_DATE_ERROR' }))
    //   ),
    // identificationId: string().required(f({ id: 'MANDATORY' })),
    // identificationIssuedAt: date().required(f({ id: 'MANDATORY' })),
    // identificationIssuer: string().required(f({ id: 'MANDATORY' })),
    // identificationTypeId: string().required(f({ id: 'MANDATORY' })),
    address: string().required(f({ id: 'MANDATORY' })),
    nationality: string().required(f({ id: 'MANDATORY' })),
    profession: string().required(f({ id: 'MANDATORY' })),
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
        <div className="">
          <div className="container  max-w-md border-2 border-gray-200 p-3 bg-gray-50">
            <div className="text-center my-6">
              <h1 className="text-3xl font-semibold text-gray-700">
                Création de compte
              </h1>
              <p className="text-sm text-gray-500">S'enregistrer</p>
            </div>

            <div className="m-6">
              <form className="mb-4" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    {f({ id: 'FIRSTNAME' })}
                  </label>
                  <Field
                    value={values.firstName || undefined}
                    as="input"
                    type="text"
                    name="firstName"
                    onChange={(e: any) => handleChange(e)}
                    placeholder={f({ id: 'ENTER_FIRSTNAME' })}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                  {touched.firstName && errors.firstName && (
                    <div className="text-red-500">{errors.firstName}</div>
                  )}
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    {f({ id: 'LASTNAME' })}
                  </label>
                  <Field
                    value={values.lastName || undefined}
                    as="input"
                    type="text"
                    name="lastName"
                    onChange={(e: any) => handleChange(e)}
                    placeholder={f({ id: 'ENTER_LASTNAME' })}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                  {touched.lastName && errors.lastName && (
                    <div className="text-red-500">{errors.lastName}</div>
                  )}
                </div>
                <div className="my-6">
                  <div style={{ marginBottom: 8 }}>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                      {f({ id: 'DATE_OF_BIRTH' })}
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
                    {f({ id: 'NATIONALITY' })}
                  </label>
                  <Field
                    as={Select}
                    suffixIcon={<CaretDownOutlined />}
                    showSearch
                    style={{ width: '100%' }}
                    placeholder={f({ id: 'SELECT_NATIONALITY' })}
                    optionFilterProp="children"
                    value={values.nationality || undefined}
                    onChange={(value: any) => {
                      setFieldValue('nationality', value);
                      console.log(value);
                    }}
                    onBlur={handleBlur}
                    name="nationality"
                    id="nationality"
                    filterOption={(
                      input: string,
                      option: { children: string }
                    ) =>
                      option?.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {nationalities?.map((d) => (
                      <Option key={d?.id} value={d!.id}>
                        <span className="text-sm text-gray-600">{d?.name}</span>
                        {/* {d?.name} */}
                      </Option>
                    ))}
                  </Field>
                  {touched.nationality && errors.nationality && (
                    <div className="text-sm text-red-500">
                      {errors.nationality}
                    </div>
                  )}
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    {f({ id: 'ADDRESS' })}
                  </label>
                  <Field
                    value={values.firstName || undefined}
                    as="input"
                    type="text"
                    name="address"
                    onChange={(e: any) => handleChange(e)}
                    placeholder={f({ id: 'ENTER_ADDRESS' })}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                  {touched.address && errors.address && (
                    <div className="text-sm text-red-500">{errors.address}</div>
                  )}
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Profession
                  </label>
                  <Field
                    value={values.profession || undefined}
                    as="input"
                    type="text"
                    name="profession"
                    onChange={(e: any) => handleChange(e)}
                    placeholder={f({ id: 'ENTER_PROFESSION' })}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                  {touched.profession && errors.profession && (
                    <div className="text-sm text-red-500">
                      {errors.profession}
                    </div>
                  )}
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    {f({ id: 'BIRTH_PLACE' })}
                  </label>
                  <Field
                    value={values.firstName || undefined}
                    as="input"
                    type="text"
                    name="birthPlace"
                    onChange={(e: any) => handleChange(e)}
                    placeholder={f({ id: 'ENTER_BIRTH_PLACE' })}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                  {touched.birthPlace && errors.birthPlace && (
                    <div className="text-sm text-red-500">
                      {errors.birthPlace}
                    </div>
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
                    placeholder={f({ id: 'ENTER_EMAIL' })}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                  {touched.email && errors.email && (
                    <div className="text-sm text-red-500">{errors.email}</div>
                  )}
                </div>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-600 dark:text-gray-400">
                      {f({ id: 'PASSWORD' })}
                    </label>
                  </div>
                  <Field
                    value={values.password || undefined}
                    as="input"
                    type="password"
                    name="password"
                    placeholder={f({ id: 'ENTER_PASSWORD' })}
                    onChange={(e: any) => handleChange(e)}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                  {touched.password && errors.password && (
                    <div className="text-sm text-red-500">
                      {errors.password}
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    {f({ id: 'PHONE' })}
                  </label>
                  <Field
                    value={values.phone || undefined}
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

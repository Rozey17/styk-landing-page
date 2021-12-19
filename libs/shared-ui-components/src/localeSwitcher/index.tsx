import React from 'react';
import { useRouter } from 'next/router';
import { Select } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
const { Option } = Select;

/**
 * The LanguageSwitcher is a <select> input which lists the possible locales as options
 */

const LocaleSwitcher: React.FC = () => {
  const router = useRouter();
  const { locale } = useRouter();
  const changeLang = (value: any) => {
    console.log(value);
    router.push(router.pathname, router.pathname, {
      locale: value,
    });
  };
  return (
    <Select
      defaultValue={locale}
      // style={{ width: 100 }}
      onChange={changeLang}
      suffixIcon={<CaretDownOutlined />}
    >
      <Option value="fr">Français</Option>
      <Option value="en">English</Option>
    </Select>
  );
};
export { LocaleSwitcher };

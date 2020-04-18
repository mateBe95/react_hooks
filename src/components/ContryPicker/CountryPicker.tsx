import React from 'react';
import { Form, Select } from 'antd';
import styles from './CountryPicker.module.css';
import { useFetch } from '../api/useFetch';
const { Option } = Select;

type CountriesValue = {
  name: string;
};

type Countries = {
  countries: any;
};

const CountryPicker = ({ onCountryChange }: { onCountryChange: any }) => {
  const { data } = useFetch<Countries>(
    'https://covid19.mathdro.id/api/countries'
  );
  const COUNTRIES_DATA = React.useMemo(() => {
    return data && data.countries.map((country: any) => country.name);
  }, [data]);

  return (
    <Form>
      <Form.Item name="country" label="Kraj" rules={[{ required: false }]}>
        <Select
          defaultValue=""
          placeholder="Wybierz Państwo dla którego chcesz zobaczyć dane"
          onChange={onCountryChange}
          allowClear
        >
          <Option value="global">Global</Option>
          {COUNTRIES_DATA &&
            COUNTRIES_DATA.map((country: string, index: number) => (
              <Option key={index} value={country}>
                {country}
              </Option>
            ))}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default CountryPicker;

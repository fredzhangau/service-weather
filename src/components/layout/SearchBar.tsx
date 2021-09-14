import React from "react";
import { useHistory } from "react-router";
import Select from "react-select";
import styled from "styled-components";
import { allCities } from "../../config/cities";
import { device } from "../../styles/device";

type Option = {
  label: string;
  value: string;
};

const Container = styled.div`
  width: 100%;
  padding: 16px;
  @media ${device.tablet} {
    width: 400px;
  }
  @media ${device.desktop} {
    width: 500px;
  }
`;

export const SearchBar: React.FC = () => {
  const history = useHistory();

  const handleSelect = (selected: Option | null) => {
    const searchTerm: string[] = selected ? selected?.label.split(", ") : [];
    if (searchTerm.length > 0) {
      history.push(`/city/${searchTerm[2]}/${searchTerm[1]}/${searchTerm[0]}`);
    } else history.push("/");
  };

  const options: Option[] = allCities.map(({ name, state, country }) => {
    return {
      value: name,
      label: `${name}, ${state}, ${country}`,
    };
  });

  return (
    <Container>
      <Select
        onChange={handleSelect}
        options={options}
        placeholder="Type city name to search..."
      />
    </Container>
  );
};

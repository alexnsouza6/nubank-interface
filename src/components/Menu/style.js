import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { alignItems: 'center' },
})`
  margin: 0 30px;
`;

export const Code = styled.View`
    overflow: hidden;
`;

import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="What kind of  course do you want? "
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{marginVertical:40,width:"90%",alignItems:"center",marginHorizontal:18}}
    />
  );
};

export default Search;
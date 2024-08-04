import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useRef } from 'react'
import { Colors } from '../../constants/colors';

type Data = Record<string, any>

interface DropDownProps {
  dataSet: Data[],
  type: string,
  keyData: string,
  placeHolder: string,
  onSelect: (value: string, type: string) => void,
}

const Dropdown = ({ dataSet, keyData, placeHolder, type, onSelect }: DropDownProps) => {
  const [search, setSearch] = useState<string>('');
  const [clicked, setClicked] = useState<boolean>(false);
  const [data, setData] = useState(dataSet);
  const [selectedValue, setSelectedValue] = useState<string>('');
  const searchRef = useRef(null);

  const onSearch = (search: string) => {
    if (search !== '') {
      let tempData = data.filter(item => {
        return item[keyData].toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(dataSet);
    }
  };

  return (
    <View style={{ marginBottom: 10 }}>
      <Pressable
        style={styles.dropDownInput}
        onPress={() => {
          setClicked(!clicked);
        }}>
        <Text style={styles.fontWeight600}>
          {selectedValue == '' ? placeHolder : selectedValue}
        </Text>
        {clicked ? (
          <Image
            source={require('../../assets/upload.png')}
            style={styles.dropDownInputIcon}
          />
        ) : (
          <Image
            source={require('../../assets/dropdown.png')}
            style={styles.dropDownInputIcon}
          />
        )}
      </Pressable>

      {clicked ? (
        <View
          style={styles.dropDownActiveBody}>
          <TextInput
            placeholder="Search.."
            value={search}
            ref={searchRef}
            onChangeText={txt => {
              onSearch(txt);
              setSearch(txt);
            }}
            style={styles.dropDownSearchInput}
          />

          <FlatList
            data={data}
            renderItem={({ item, index }) => {
              return (
                <Pressable
                  style={styles.dropDownSearchResultItem}
                  onPress={() => {
                    setSelectedValue(item[keyData]);
                    setClicked(!clicked);
                    onSearch('');
                    setSearch('');
                    onSelect(item[keyData], type);
                  }}>
                  <Text style={styles.fontWeight600}>{item[keyData]}</Text>
                </Pressable>
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
}

export default Dropdown

const styles = StyleSheet.create({
  dropDownInput: {
    width: '100%',
    height: 40,
    borderColor: Colors.common.grey,
    borderRadius: 30,
    borderWidth: 0.5,
    alignSelf: 'center',
    //marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  fontWeight600: {
    fontWeight: '600'
  },
  dropDownInputIcon: {
    width: 20,
    height: 20
  },
  dropDownActiveBody: {
    elevation: 5,
    marginTop: 0,
    height: 200,
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10
  },
  dropDownSearchInput: {
    minWidth: '100%',
    height: 50,
    alignSelf: 'center',
    borderWidth: 0.2,
    borderColor: '#8e8e8e',
    borderRadius: 7,
    marginTop: 20,
    paddingLeft: 20,
  },
  dropDownSearchResultItem: {
    width: '100%',
    alignSelf: 'center',
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#8e8e8e',
  }
})
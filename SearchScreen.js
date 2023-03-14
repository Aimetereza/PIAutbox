import React, { useState } from 'react';
import { StyleSheet, View, TextInput, FlatList, Text, TouchableOpacity,Linking } from 'react-native';


const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [activeButton, setActiveButton] = useState('stores'); // stores or products



  const LojasData = [
    { id: '1', name: 'CasaSofia'},
    { id: '2', name: 'Casa Bahia' },
    { id: '3', name: 'Magazine Luiza' },
    { id: '4', name: 'Shopee' },
    { id: '5', name: 'Magalu' },
  ];

  const ProdutosData = [
    { id: '1', name: 'Tenis' },
    { id: '2', name: 'Moveis' },
    { id: '3', name: 'Roupas' },
    { id: '4', name: 'Limpeza' },
    { id: '5', name: 'Esports' },
  ];

 
 


  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      
    </View>
  );

  const handleSearch = (text) => {
    setSearchText(text);
   
  };



  const filteredData = activeButton === 'stores'
    ? LojasData.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      )
    : ProdutosData.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );

  return (
    <View style={styles.container}>
            <Text style={styles.titulo}>AuthBox</Text>
 <TextInput
        style={styles.searchInput}
        placeholder={`Pesquise ${activeButton}`}
        value={searchText}
        onChangeText={handleSearch}
      />
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, activeButton === 'stores' && styles.activeButton]}
          onPress={() => setActiveButton('stores')}
        >
          <Text style={[styles.buttonText, activeButton === 'stores' && styles.activeButtonText]}>Lojas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, activeButton === 'products' && styles.activeButton]}
          onPress={() => setActiveButton('products')}
        >
          <Text style={[styles.buttonText, activeButton === 'products' && styles.activeButtonText]}>Produtos</Text>
        </TouchableOpacity>

        
      </View>




     
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#eee',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  activeButton: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  buttonText: {
    color: '#333',
  },
  activeButtonText: {
    color: '#fff',
  },
 
  titulo: {
    textAlign: 'center',
  }
})
export default SearchScreen;

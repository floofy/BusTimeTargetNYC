import React from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import styles from './Styles/SearchBarStyles'
import { Colors, Metrics } from '../Themes/'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class SearchBar extends React.Component {
  static propTypes = {
    onSearch: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    searchTerm: React.PropTypes.string
  }

  render () {
    const { onChange, onSearch, searchTerm } = this.props
    const onSubmitEditing = () => onSearch(searchTerm)
    return (
      <View style={styles.container}>
        <Icon name='search' size={Metrics.icons.tiny} style={styles.searchIcon} />
        <TextInput
          ref='searchText'
          autoFocus
          placeholder='Search Bus Route'
          placeholderTextColor={Colors.teal}
          underlineColorAndroid='transparent'
          style={styles.searchInput}
          value={this.props.searchTerm}
          onChangeText={onChange}
          autoCapitalize='none'
          onSubmitEditing={onSubmitEditing}
          returnKeyType={'search'}
          autoCorrect={false}
          selectionColor={Colors.snow}
        />
        <TouchableOpacity onPress={() => { this.props.searchTerm = '' }} style={styles.cancelButton} />
      </View>
    )
  }
}

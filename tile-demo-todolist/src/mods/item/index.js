import {createElement, render, Component} from 'rax';
import View from 'tboc-view';
import Image from 'tboc-image';
import Input from 'tboc-input';
import Text from 'tboc-text';
import Icon from 'tboc-icon';
import styles from './style.js';

export default class Item extends Component {

  state = {
    item: this.props.item,
    isEditMode: false
  };

  componentWillReceiveProps(props) {
    this.setState({
      item: props.item
    });
  }
  
  toggleStar = (id) => {
    this.props.toggleStar && this.props.toggleStar(id);
  }
  
  toggleDone = (id, checked) => {
    this.props.toggleDone && this.props.toggleDone(id, checked);
  }

  finishInput = (id, evt) => {
    this.setState({
      isEditMode: false
    }, () => {
      if (!evt.value) return;
      this.props.finishInput && this.props.finishInput(id, evt.value);
    });
  }

  inputValue = (id, evt) => {
    if (evt.which === 13 || (evt.value || '').indexOf('\n') > -1) {
      this.setState({
        isEditMode: false
      }, () => {
        this.props.finishInput && this.props.finishInput(id, evt.value.replace(/\n/, ''));
      });
    }
  }

  setEditMode = () => {
    this.setState({
      isEditMode: true
    });
  }

  render() {
    const item = this.state.item;
    const isFinished = this.props.type === 'finished';
    const isEditMode = this.state.isEditMode;
    return (
      <View style={[styles.item, isFinished ? {opacity: 0.7} : {}]}>
        <Input type="checkbox" containerStyle={styles.checkbox.container} checkboxStyle={styles.checkbox.checkbox} checked={isFinished} onChange={(checked) => this.toggleDone(item.id, checked)} />
        {
          isFinished ? (
            <View>
              <Text style={[styles.text, styles.textFinish]}>{item.text}</Text>
              <Text style={styles.text}>{item.time} 完成</Text>
            </View>
          ) : (
            !isEditMode ? 
              <View style={styles.textPending} onClick={this.setEditMode}>{item.text}</View> : 
              <Input
                multiline={true}
                style={styles.inputPending} 
                value={item.text} 
                onBlur={(evt) => this.finishInput(item.id, evt)}
                onInput={(evt) => this.inputValue(item.id, evt)}
              />
          )
        }
        <View style={styles.star} onClick={() => this.toggleStar(item.id)}>
          {
            item.stared ? 
              <Image 
                source={{uri: 'https://img.alicdn.com/tfs/TB1KEP9X6ihSKJjy0FfXXbGzFXa-19-31.jpg'}} 
                style={styles.image}
              /> :
              <Icon 
                style={styles.star}
                fontFamily="iconfont" 
                source={{uri: '//at.alicdn.com/t/font_417171_qggn7j62kp3hxgvi.ttf', codePoint: '\uE66c'}}
              />
          }
        </View>
      </View>
    );
  }

}
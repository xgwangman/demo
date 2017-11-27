import {createElement, render, Component} from 'rax';
import View from 'tboc-view';
import Image from 'tboc-image';
import Input from 'tboc-input';
import Icon from 'tboc-icon';
import styles from './style.js';

export default class AddBox extends Component {
  
  val = "";
  state = {
    value: '添加一个任务...',
    stared: false
  };

  onInput = (evt) => {
    if (!evt.value) return;
    this.val = evt.value;
    if (evt.which === 13 || (evt.value || '').slice(-1).indexOf('\n') > -1) {
      this._submit(); 
      this.setState({
        value: '',
        stared: false
      });
      return;
    }
  }

  toggleStar = () => {
    this.setState({
      stared: !!!this.state.stared,
      value: this.val
    });
  }

  _submit = () => {
    this.props.addAction && this.props.addAction(this.val.replace(/\n/, ''), this.state.stared);
  }

  render() {

    return (
      <View style={styles.wrapper}>
        <Input 
          value={this.state.value}
          multiline={true}
          style={styles.input} 
          onInput={this.onInput}
          onKeyDown={this.onInput}
        />
        <View style={styles.star} onClick={this.toggleStar}>
          <Icon 
            style={this.state.stared ? {color: '#e6322f'} : {}} 
            fontFamily="iconfont" 
            source={{
              uri: '//at.alicdn.com/t/font_417171_qggn7j62kp3hxgvi.ttf', 
              codePoint: this.state.stared ? '\uE601' : '\uE66c'
            }}
          />
        </View>
      </View>
    )
  }

}
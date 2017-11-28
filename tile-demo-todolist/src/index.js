import {createElement, render, Component} from 'rax';
import styles from './style.js';

import AddBox from './mods/add';
import ListBox from './mods/list';

class App extends Component {

  state = {
    list: [
      {id: 1, text: '买张电影票'},
      {id: 2, text: '回家吃饭', stared: true},
      {id: 3, text: '刷碗时间'},
      {id: 4, text: '要起床了'},
      {id: 5, text: '喝杯水', stared: true},
      {id: 6, text: '站起来运动下', done: true, time: '3月4日 05:06:07'},
      {id: 7, text: '睡觉', done: true, time: '3月4日 05:06:07'},
      {id: 8, text: '运动健身', done: true, time: '3月4日 05:06:07', stared: true},
      {id: 9, text: '打电话给客户', done: true, time: '3月4日 05:06:07'},
      {id: 10, text: '去工地一趟', done: true, time: '3月4日 05:06:07', stared: true}
    ],
    showFinishBox: false
  }

  save() {
    if (this.state.list && this.state.list.length > 0) {
      Tida.storage.setItem('todolist', JSON.stringify(this.state.list), (ret) => {
        if (ret.result !== 'success') {
          console.log(ret);
        }
      });
    }
  }

  componentWillMount() {
    Tida.storage.getItem('todolist', (ret) => {
      if (!ret.data) {
        this.save();
      } else {
        let data;
        try {
          data = JSON.parse(ret.data);
          this.setState({
            list: data
          });
        } catch(e) {}
      }
    });
  }

  toggleFinishBox = () => {
    this.setState({
      showFinishBox: !this.state.showFinishBox
    }, () => {
      this.save();
    });
  }

  _changeItem = (id, resolve) =>  {
    for (let i = 0; i < this.state.list.length; i++) {
      if (this.state.list[i].id === id) {
        const list = JSON.parse(JSON.stringify(this.state.list));
        resolve(list[i]);
        this.setState({
          list: list
        }, () => {
          this.save();
        });
        break;
      }
    }
  }
  
  toggleStar = (id) => {
    this._changeItem(id, (item) => {
      item.stared = !!!item.stared;
    });
  }

  toggleDone = (id, checked) => {
    this._changeItem(id, (item) => {
      item.done = !checked;
      item.time = (new Date).toLocaleString();
    });
  }
  
  finishInput = (id, val) => {
    this._changeItem(id, (item) => {
      item.text = val;
    });
  }

  addAction = (val, stared) => {
    const list = JSON.parse(JSON.stringify(this.state.list));
    list.push({
      id: new Date().getTime(),
      text: val,
      stared: stared,
      createTime: new Date().toLocaleString()
    });
    this.setState({
      list: list
    }, () => {
      this.save();
    });
  }


  render() {
    const finishedList = this.state.list.filter(item => !!item.done);
    const unFinishedList = this.state.list.filter(item => !!!item.done);
    const allFinished = finishedList.length > 0 && unFinishedList.length === 0;
    return (
      <View style={styles.appWrapper}>
        <Image style={styles.appBg} source={{ uri:  "https://img.alicdn.com/tfs/TB1PBL4XfxNTKJjy0FjXXX6yVXa-600-900.jpg" }} resizeMode="cover" />
        <ScrollView style={styles.innerWrapper}>
          <AddBox addAction={this.addAction} />
          <ListBox 
            data={unFinishedList} 
            toggleStar={this.toggleStar}
            toggleDone={this.toggleDone}
            finishInput={this.finishInput}
          />
          {
            finishedList.length ? (
              <View >
                <View style={styles.finishedItems} onClick={this.toggleFinishBox}>
                  <Text style={styles.finishedItemsText}>{finishedList.length} 个已完成任务</Text>
                </View>
                {
                  this.state.showFinishBox || allFinished ? <ListBox 
                    data={finishedList}
                    type="finished"
                    toggleStar={this.toggleStar}
                    toggleDone={this.toggleDone}
                    finishInput={this.finishInput}
                  /> : null
                }
              </View>
            ) : null
          }
        </ScrollView>
      </View>
    );
  }
}

render(<App />);
import React, { useContext, useMemo } from 'react';
import { SelectBox, TextField, Form, Table, DataSet, Select, TextArea} from 'choerodon-ui/pro';
import { observer } from 'mobx-react-lite';
import { PageHeaderWrapper } from 'hzero-boot/lib/components/Page';
import { Divider, Icon, Radio } from 'choerodon-ui';
import Store from './stores';
import { demoDs } from '../../stores/introDs';

const { Option } = SelectBox;
const RadioGroup = Radio.Group;

function handleChange(value) {
  console.log(`Selected: ${value}`);
}

const children = [];

children.push(<Option>JAVA</Option>);
children.push(<Option>JavaScript</Option>);


const IntroPage = () => {
  // const demoDataSet = useMemo(() => new DataSet(demoDs()), []);
  const { demoDataSet } = useContext(Store);
  console.log(demoDataSet);


  const columns = [
    { name: 'name', editor: true },
    { name: 'sex', editor: true },
  ];


  return (
    <PageHeaderWrapper title="Intro">
      <Divider orientation="left">

        <h2>
          <Icon type="circulate" />
          About Me
        </h2>
      </Divider>
      <Form dataSet={demoDataSet}>
        <TextField name="name" style={{ width: 200 }} />
        <RadioGroup name="sex">
          <Radio value='M'>男</Radio>
          <Radio value='F'>女</Radio>
        </RadioGroup>
        <Select
          name="task"
          mode="multiple"
          placeholder="Please select"
          defaultValue="jack"
          onChange={handleChange}
          style={{ width: '100%' }}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="wu">Wu</Option>
        </Select>
        <TextArea
          name="mine"
          placeholder="自我介绍"
          defaultValue="My name is CJM"
          autoSize={{ minRows: 2, maxRows: 8 }}
        />
        <TextArea
          name="condition"
          placeholder="学习情况"
          defaultValue="学习ING"
          autoSize={{ minRows: 2, maxRows: 8 }}
        />
      </Form>
      <Table dataSet={demoDataSet} columns={columns} />
    </PageHeaderWrapper>
  );
};

export default IntroPage;

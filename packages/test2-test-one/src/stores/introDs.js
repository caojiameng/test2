import { DataSet } from 'choerodon-ui/pro';

const optionDs = new DataSet({
  selection: 'single',
  data: [
    {value: 'F', meaning: "女"},
    {value: 'M', meaning: "男"},
    ],
});

// const taskDs = new DataSet({
//   selection: 'multiple',
//   data: [
//     {value: 'JAVA', meaning: "JAVA"},
//     {value: 'JavaScript', meaning: "JavaScript"},
//   ],
// });


const demoDs =()=> ({
  selection: false,
  data: [
    {name: '曹佳萌', sex: "F"},
  ],
  queryFields: [
    {
      name: 'name',
      type: 'string',
      label: '姓名',
      defaultValue: '曹佳萌',
    },
    {
      name: 'sex',
      type: 'string',
      label: '性别',
      option: optionDs,
    },
    {
      name: 'task',
      type: 'string',
      label: '技术栈',
      // option: taskDs,
    },
  ],
  fields: [
    {
      name: 'name',
      type: 'string',
      label: '姓名',
    },
    {
      name: 'sex',
      type: 'string',
      label: '性别',
      option: optionDs,
    },
    {
      name: 'task',
      type: 'string',
      label: '技术栈',
      // option: taskDs,
    },
    {
      name: 'mine',
      type: 'string',
      label: '自我介绍',
      // option: taskDs,
    },
    {
      name: 'condition',
      type: 'string',
      label: '学习情况',
      // option: taskDs,
    },
  ],
});

export { demoDs };

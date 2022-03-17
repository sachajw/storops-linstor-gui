import { ISCSI } from '@app/interfaces/iscsi';
import service from '@app/requests';
import { createModel } from '@rematch/core';
import { RootModel } from '.';

type Data = {
  total: number;
  list: ISCSI[];
};

export const iscsi = createModel<RootModel>()({
  state: {
    total: 0,
    list: [],
  } as Data, // initial state
  reducers: {
    // handle state changes with pure functions
    setISCSIList(state, payload: Data) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async getList(payload: { page: number; pageSize: number }, state) {
      const res = await service.get('/api/v2/iscsi');
      const data = res.data ?? [];
      console.log(res.data, '???');
      dispatch.iscsi.setISCSIList({
        total: data.length,
        list: data,
      });
    },
  }),
});

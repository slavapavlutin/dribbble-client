// @flow
import type { Store } from 'redux';
import type { ID } from '../../lib/types';
import type { Users } from '../users/types';

export type Shot = {
  +id: ID,
  +title: string,
  +author: ID,
  +likesCount: number,
  +viewsCount: number,
  +commentsCount: number,
  +images: ShotImage,
  +description?: string,
};

export type ShotCategory = 'popular' | 'recent' | 'debuts';

export type Shots = Array<Shot>;

export type ShotImage = {
  +normal: string,
  +teaser: string,
  +hidpi: string,
};

export type ShotsState = {
  all: Shots,
  lastUpdated: number,
  isLoading: boolean,
  isRefreshing: boolean,
  popularShots: Array<ID>,
  recentShots: Array<ID>,
  debutShots: Array<ID>,
};

export type AppState = {
  shots: ShotsState,
};

export type ShotsResponse = {
  type: ShotCategory,
  shots: Shots,
  users: Users,
};

export type Action =
  | {
      type: 'REQUEST_SHOTS',
      payload: { page: number },
    }
  | {
      type: 'FETCH_SHOTS',
      payload: {
        type: ShotCategory,
        page: number,
      },
    }
  | {
      type: 'RECEIVE_SHOTS',
      payload: { response: ShotsResponse },
    }
  | { type: 'RECEIVE_SHOTS_FAILURE', payload: Error }
  | { type: 'REFRESH_SHOTS', payload: ShotCategory }
  | {
      type: 'RECEIVE_FRESH_SHOTS',
      payload: { response: ShotsResponse },
    };

export type AppStore = Store<AppState, Action>;

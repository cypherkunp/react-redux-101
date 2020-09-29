import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CREAM = 'BUY_ICECREAM';

// Action creator
function buyCake() {
  return {
    type: BUY_CAKE,
    payload: {
      info: 'First Redux Action',
    },
  };
}

function buyIceCream() {
  return {
    type: BUY_ICE_CREAM,
  };
}

// Reducers
const initialCakeState = {
  numOfCake: 10,
};

const initialIceCreamState = {
  numOfIceCream: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// configuring the store
const store = createStore(rootReducer, applyMiddleware(logger));

console.log(`Initial state is: ${JSON.stringify(store.getState())}`);

store.subscribe(() => {
  console.log(`Updated state is: ${JSON.stringify(store.getState())}`);
});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

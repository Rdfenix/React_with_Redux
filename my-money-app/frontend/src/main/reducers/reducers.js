import {combineReducers} from 'redux'
import DashboardReducer from '../../dashboard/dashboardReducer'

const RootReducer = combineReducers({
    dashboard: DashboardReducer
})

export default RootReducer
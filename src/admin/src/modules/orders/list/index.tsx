import { useAppDispatch, useAppSelector } from "lib/hooks"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import {
  fetchOrders,
  selectOrder,
  deselectOrder,
  selectAllOrder,
  deselectAllOrder,
  fetchMoreOrders,
} from "../actions"
import { selectOrders } from "../ordersSlice"
import List from "./components/list"

const Redux = props => {
  const {} = useAppSelector(selectOrders)
  const dispatch = useAppDispatch()

  return null
}

const mapStateToProps = (state, ownProps) => {
  return {
    settings: state.settings.settings,
    items: state.orders.items,
    selected: state.orders.selected,
    loadingItems: state.orders.loadingItems,
    hasMore: state.orders.hasMore,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoad: () => {
      dispatch(fetchOrders())
    },
    onSelect: (orderId, checked) => {
      if (checked) {
        dispatch(selectOrder(orderId))
      } else {
        dispatch(deselectOrder(orderId))
      }
    },
    onSelectAll: checked => {
      if (checked) {
        dispatch(selectAllOrder())
      } else {
        dispatch(deselectAllOrder())
      }
    },
    loadMore: () => {
      dispatch(fetchMoreOrders())
    },
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List))

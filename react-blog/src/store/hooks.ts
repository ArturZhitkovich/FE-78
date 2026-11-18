import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';

// Те же useDispatch и useSelector, но уже знают типы нашего store
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
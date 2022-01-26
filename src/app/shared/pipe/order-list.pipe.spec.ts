import { OrderListPipe } from './order-list.pipe';
import * as mockRaw from '../../data/tracks.json';
import { TrackModel } from '../../core/models/tracks.model';

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });

  it('Testing input and output data', () => {
    // TODO: Arrange
    const pipe = new OrderListPipe();
    const { data }: any = (mockRaw as any).default;

    // TODO: Act
    const result: TrackModel[] = pipe.transform(data);

    // TODO: Assert
    expect(result).toEqual(data);
  });

  it('🧽🍎  Should order data ASC', () => {
    // TODO: Arrange
    const pipe = new OrderListPipe();
    const { data }: any = (mockRaw as any).default;
    const firstValue = data.find((t: any) => t._id === 7); // 50-Cent
    const lastValue = data.find((t: any) => t._id === 6); // TNT

    // TODO: Act
    const result: TrackModel[] = pipe.transform(data, 'name', 'asc');
    const firstResult = result[0];
    const lastResult = result[result.length - 1];

    // TODO: Assert
    expect(firstResult).toEqual(firstValue);
    expect(lastResult).toEqual(lastValue);
  });

  it('🐶🐈  Should order data DESC', () => {
    // TODO: Arrange
    const pipe = new OrderListPipe();
    const { data }: any = (mockRaw as any).default;
    const firstValue = data.find((t: any) => t._id === 6); // TNT
    const lastValue = data.find((t: any) => t._id === 7); // 50-Cent

    // TODO: Act
    const result: TrackModel[] = pipe.transform(data, 'name', 'desc');
    const firstResult = result[0];
    const lastResult = result[result.length - 1];

    // TODO: Assert
    expect(firstResult).toEqual(firstValue);
    expect(lastResult).toEqual(lastValue);
  });
});

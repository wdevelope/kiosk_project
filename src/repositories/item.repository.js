import { Item } from '../db';

class ItemRepository {
  create = async (item) => {
    return Item.create(item);
  };

  getItems = async (type) => {
    return Item.findAll({
      where: {
        ...(type !== 'all' && { type }),
      },
    });
  };

  findOne = async (itemId) => {
    return Item.findOne({
      where: {
        id: itemId,
      },
    });
  };

  delete = async (itemId) => {
    return Item.destroy({
      where: {
        id: itemId,
      },
    });
  };

  modify = async (item) => {
    return Item.update(
      {
        ...(item.name && { name: item.name }),
        ...(item.price && { price: item.price }),
      },
      {
        where: {
          id: item.id,
        },
      }
    );
  };
}

export default ItemRepository;

import css from "./BoardsList.module.css";
import BoardItem from "../BoardItem/BoardItem";
import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";
import clsx from "clsx";
import sprite from "../../../assets/sprite.svg";

export default function BoardsList({ theme }) {
  const handleUpdate = (boardId) => {
    console.log(`Update ${boardId}`);
  };

  const handleDelete = (boardId) => {
    console.log(`Delete ${boardId}`);
  };

  const list = [
    {
      _id: "666441ca47f3118ab3b584c9",
      name: "My board 1",
      iconName: "icon-project-1",
      backgroundUrl:
        "https://res.cloudinary.com/dvjg8aoza/image/upload/v1717539986/user-dark_w1uksl.png",
      owner: "666360f436afcfb89fea6e15",
      createdAt: "2024-06-08T11:34:34.329Z",
      updatedAt: "2024-06-08T11:34:34.329Z",
    },
    {
      _id: "666441ca47f3118ab3b584c93",
      name: "My board 2",
      iconName: "icon-project-5",
      backgroundUrl:
        "https://res.cloudinary.com/dvjg8aoza/image/upload/v1717539986/user-dark_w1uksl.png",
      owner: "666360f436afcfb89fea6e15",
      createdAt: "2024-06-08T11:34:34.329Z",
      updatedAt: "2024-06-08T11:34:34.329Z",
    },
    {
      _id: "666441ca47f3118ab3b58423",
      name: "My board 3",
      iconName: "icon-project-3",
      backgroundUrl:
        "https://res.cloudinary.com/dvjg8aoza/image/upload/v1717539986/user-dark_w1uksl.png",
      owner: "666360f436afcfb89fea6e15",
      createdAt: "2024-06-08T11:34:34.329Z",
      updatedAt: "2024-06-08T11:34:34.329Z",
    },
    {
      _id: "666441ca47f3118ab334c93",
      name: "My board 4",
      iconName: "icon-project-2",
      backgroundUrl:
        "https://res.cloudinary.com/dvjg8aoza/image/upload/v1717539986/user-dark_w1uksl.png",
      owner: "666360f436afcfb89fea6e15",
      createdAt: "2024-06-08T11:34:34.329Z",
      updatedAt: "2024-06-08T11:34:34.329Z",
    },
    {
      _id: "666441ca47f3118a184c93",
      name: "My board 5",
      iconName: "icon-project-4",
      backgroundUrl:
        "https://res.cloudinary.com/dvjg8aoza/image/upload/v1717539986/user-dark_w1uksl.png",
      owner: "666360f436afcfb89fea6e15",
      createdAt: "2024-06-08T11:34:34.329Z",
      updatedAt: "2024-06-08T11:34:34.329Z",
    },

    {
      _id: "666441ca47f3118a1a84c93",
      name: "My board 6",
      iconName: "icon-project-6",
      backgroundUrl:
        "https://res.cloudinary.com/dvjg8aoza/image/upload/v1717539986/user-dark_w1uksl.png",
      owner: "666360f436afcfb89fea6e15",
      createdAt: "2024-06-08T11:34:34.329Z",
      updatedAt: "2024-06-08T11:34:34.329Z",
    },
    {
      _id: "666441ca47f3118a1ds84c93",
      name: "My board 7",
      iconName: "icon-project-7",
      backgroundUrl:
        "https://res.cloudinary.com/dvjg8aoza/image/upload/v1717539986/user-dark_w1uksl.png",
      owner: "666360f436afcfb89fea6e15",
      createdAt: "2024-06-08T11:34:34.329Z",
      updatedAt: "2024-06-08T11:34:34.329Z",
    },

    {
      _id: "666441ca47f3118a1ddds84c93",
      name: "My board 8",
      iconName: "icon-project-8",
      backgroundUrl:
        "https://res.cloudinary.com/dvjg8aoza/image/upload/v1717539986/user-dark_w1uksl.png",
      owner: "666360f436afcfb89fea6e15",
      createdAt: "2024-06-08T11:34:34.329Z",
      updatedAt: "2024-06-08T11:34:34.329Z",
    },

    {
      _id: "666441ca47f3118a1ds84erec93",
      name: "My board 9",
      iconName: "icon-project-1",
      backgroundUrl:
        "https://res.cloudinary.com/dvjg8aoza/image/upload/v1717539986/user-dark_w1uksl.png",
      owner: "666360f436afcfb89fea6e15",
      createdAt: "2024-06-08T11:34:34.329Z",
      updatedAt: "2024-06-08T11:34:34.329Z",
    },

    {
      _id: "666441ca47f3118a1dsfd84c93",
      name: "My board 10",
      iconName: "icon-project-2",
      backgroundUrl:
        "https://res.cloudinary.com/dvjg8aoza/image/upload/v1717539986/user-dark_w1uksl.png",
      owner: "666360f436afcfb89fea6e15",
      createdAt: "2024-06-08T11:34:34.329Z",
      updatedAt: "2024-06-08T11:34:34.329Z",
    },
  ];
  return (
    <ul className={css.list}>
      {list.map((item) => {
        return (
          <li key={nanoid()} className={css.item}>
            <NavLink
              to={`/home/${item._id}`}
              className={({ isActive }) =>
                clsx(css.link, isActive && css.isActive, css[theme])
              }
            >
              {({ isActive }) => (
                <>
                  <BoardItem theme={theme} board={item} />

                  {isActive && (
                    <div className={css.controls}>
                      <ul className={css.controlsList}>
                        <li>
                          <button
                            type="button"
                            onClick={() => handleUpdate(item._id)}
                            className={css.itemBtn}
                          >
                            <svg className={clsx(css.btnIcon, css[theme])}>
                              <use href={`${sprite}#icon-pencil`}></use>
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={() => handleDelete(item._id)}
                            className={css.itemBtn}
                          >
                            <svg className={clsx(css.btnIcon, css[theme])}>
                              <use href={`${sprite}#icon-trash`}></use>
                            </svg>
                          </button>
                        </li>
                      </ul>
                      <div className={clsx(css.border, css[theme])}></div>
                    </div>
                  )}
                </>
              )}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

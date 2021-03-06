import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Stack, ListAction, Link, Text, Input } from '@codesandbox/components';
import css from '@styled-system/css';
import { MenuOptions } from './Menu';

export const FolderListItem = ({
  name,
  path,
  numberOfSandboxes,
  // editing
  editing,
  enterEditing,
  isNewFolder,
  newName,
  inputRef,
  onChange,
  onKeyDown,
  onSubmit,
  onBlur,
  // drop target
  isOver,
  // drag preview
  // opacity,
  // menu conflict
  onClick,
  ...props
}) => (
  <ListAction
    css={css({
      paddingX: 0,
      backgroundColor: isOver ? 'list.hoverBackground' : 'inherit',
    })}
  >
    <Link
      as={RouterLink}
      to={`/new-dashboard/all` + path}
      onClick={onClick}
      style={{ width: '100%' }}
      {...props}
    >
      <Stack
        gap={2}
        justify="space-between"
        align="center"
        paddingX={2}
        css={css({
          height: 64,
          borderBottom: '1px solid',
          borderBottomColor: 'grays.600',
          overflow: 'hidden',
        })}
      >
        <Stack gap={4} align="center">
          <Stack
            as="div"
            justify="center"
            align="center"
            css={css({
              height: 32,
            })}
          >
            <svg width={32} height={24} fill="none" viewBox="0 0 56 49">
              <path
                fill="#6CC7F6"
                d="M20.721 0H1.591A1.59 1.59 0 000 1.59v45.82C0 48.287.712 49 1.59 49h52.82A1.59 1.59 0 0056 47.41V7.607a1.59 1.59 0 00-1.59-1.59H28L21.788.41A1.59 1.59 0 0020.72 0z"
              />
            </svg>
          </Stack>
          <Stack justify="space-between" align="center">
            {editing ? (
              <form onSubmit={onSubmit}>
                <Input
                  value={newName}
                  ref={inputRef}
                  onChange={onChange}
                  onKeyDown={onKeyDown}
                  onBlur={onBlur}
                />
              </form>
            ) : (
              <Text size={3} weight="medium">
                {name}
              </Text>
            )}
          </Stack>
        </Stack>
        {!isNewFolder ? (
          <Text size={3} block variant="muted">
            {numberOfSandboxes || 0}{' '}
            {numberOfSandboxes === 1 ? 'sandbox' : 'sandboxes'}
          </Text>
        ) : null}

        {!isNewFolder ? (
          <MenuOptions path={path} onRename={enterEditing} />
        ) : null}
      </Stack>
    </Link>
  </ListAction>
);

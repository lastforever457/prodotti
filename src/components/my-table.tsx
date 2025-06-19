'use client'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'
import { Card, CardDescription, CardTitle } from './ui/card'

interface IMyTableProps {
  loading?: boolean
  className?: string
  columns: Record<string, any>[]
  dataSource: any[]
  rowKey?: string
  header?: ReactNode
}

const MyTable = ({
  loading,
  className,
  columns,
  dataSource,
  rowKey,
  header,
}: IMyTableProps) => {
  const t = useTranslations()

  if (loading) {
    return <div className={className}>{t('loading')}</div>
  }

  return (
    <div className={className}>
      <Card>
        {header ? (
          header
        ) : (
          <>
            <CardTitle className="hidden"></CardTitle>
            <CardDescription className="hidden"></CardDescription>
          </>
        )}
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((col, idx) => (
                <TableHead
                  key={col.key ?? col.dataIndex ?? idx}
                  style={{ width: col.width }}
                >
                  {typeof col.title === 'function' ? col.title() : col.title}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataSource?.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  {t('no data')}
                </TableCell>
              </TableRow>
            ) : (
              dataSource?.map((row, rowIdx) => (
                <TableRow key={rowKey ? row[rowKey] : rowIdx}>
                  {columns.map((col, colIdx) => {
                    let value = col.dataIndex
                      ? Array.isArray(col.dataIndex)
                        ? col.dataIndex.reduce((acc, key) => acc?.[key], row)
                        : row[col.dataIndex]
                      : undefined

                    // If render function exists, use it
                    if (col.render) {
                      value = col?.render(value, row, rowIdx)
                    }

                    return (
                      <TableCell key={col.key ?? col.dataIndex ?? colIdx}>
                        {value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}

export default MyTable

'use client'

import React, { useEffect, useState } from 'react'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import Image from 'next/image'

// Define the structure of each item in the data array
interface DataItem {
  id: string | number
  name: string
  team: string
  request: string
  date: string
  status: string
}

// Define the props for the DataRequestsTable component
interface DataRequestsTableProps {
  data: DataItem[]
}

/**
 * DataRequestsTable Component
 *
 * This component renders a sortable and selectable table of data requests.
 * It includes features like sorting, checkbox selection, and responsive design.
 *
 * @param data - Array of data items to display in the table
 */
export default function DataRequestsTable({ data }: DataRequestsTableProps) {
  // Array of column names for the table header
  const columns: (keyof DataItem)[] = ['name', 'team', 'request', 'date', 'status'];

  const [sortedData, setSortedData] = useState<DataItem[]>(data);
  const [sortColumn, setSortColumn] = useState<keyof DataItem>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [selectedItems, setSelectedItems] = useState<(string | number)[]>([]);

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column as keyof DataItem);
      setSortDirection('asc');
    }
  };

  const handleCheckboxChange = (id: string | number) => {
    setSelectedItems(prevSelected =>
      prevSelected.includes(id)
        ? prevSelected.filter(item => item !== id)
        : [...prevSelected, id]
    );
  };

  useEffect(() => {
    const newSortedData = [...sortedData].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1
      if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1
      return 0
    })
    setSortedData(newSortedData)
  }, [sortColumn, sortDirection])

  return (
    <div className="w-full rounded-lg border bg-white shadow-md">
      {/* Table header image */}
      <Image
        src="/tableBar.png"
        alt="bar"
        className="w-full rounded-t-md max-sm:h-5"
        width={0}
        height={0}
      />

      <div className="p-2 px-4 max-sm:px-2">
        {/* Scrollable area for the table */}
        <ScrollArea className="h-[240px] overflow-auto">
          <Table wrapperClassName="overflow-clip">
            {/* Table Header */}
            <TableHeader className="sticky top-0 z-10 bg-white">
              <TableRow className="border-b">
                {/* Checkbox column header */}
                <TableHead className="w-24 p-2 text-left font-medium text-gray-500">
                  Select
                </TableHead>
                {/* Dynamically generated column headers */}
                {columns.map((column) => (
                  <TableHead
                    key={column}
                    className={`cursor-pointer p-2 text-center font-medium text-gray-500 ${column === 'team' || column === 'date' ? 'max-sm:hidden' : column === 'request' ? 'max-[425px]:hidden' : ''}`}
                    onClick={() => handleSort(column.toLowerCase())}
                  >
                    <div className="flex items-center pl-1">
                      {column.charAt(0).toUpperCase() + column.slice(1)}
                      {/* Sort direction indicator */}
                      {sortColumn === column && sortDirection === 'asc' ? (
                        <ChevronUpIcon className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                      )}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            {/* Table Body */}
            <TableBody>
              {sortedData.map((item, index) => (
                <TableRow
                  key={index}
                  className={`border-b ${selectedItems.includes(item.id) ? 'bg-blue-100' : ''}`}
                >
                  {/* Checkbox cell */}
                  <TableCell className="w-16 p-2">
                    <Checkbox
                      id={`select-${item.id}`}
                      checked={selectedItems.includes(item.id)}
                      onCheckedChange={() => handleCheckboxChange(item.id)}
                    />
                  </TableCell>
                  {/* Name cell with avatar */}
                  <TableCell className="p-2">
                    <div className="flex items-center">
                      <Avatar className="mr-2 h-8 w-8 bg-gray-200 max-sm:hidden">
                        <AvatarFallback>{item.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div>{item.name}</div>
                        {/* Mobile-only view for team and date */}
                        <div className="text-sm text-gray-500 sm:hidden">
                          {item.team}
                          <br />
                          {item.date}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  {/* Team cell (hidden on small screens) */}
                  <TableCell className="p-2 max-sm:hidden">
                    {item.team}
                  </TableCell>
                  {/* Request cell (hidden on very small screens) */}
                  <TableCell className="whitespace-normal break-words p-2 max-[425px]:hidden">
                    {item.request}
                  </TableCell>
                  {/* Date cell (hidden on small screens) */}
                  <TableCell className="p-2 max-sm:hidden">
                    {item.date}
                  </TableCell>
                  {/* Status cell with badge */}
                  <TableCell className="p-2">
                    <Badge
                      variant="default"
                      className="rounded-full bg-black px-3 py-1 text-white hover:bg-black"
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* Horizontal scroll bar */}
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  )
}

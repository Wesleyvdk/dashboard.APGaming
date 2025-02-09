import type { Player } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PlayerContractsProps {
  player: Player;
}

export function PlayerContracts({ player }: PlayerContractsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contracts</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {player.contracts.map((contract) => (
              <TableRow key={contract.id}>
                <TableCell>
                  {new Date(contract.startDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(contract.endDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {contract.isActive ? "Active" : "Inactive"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

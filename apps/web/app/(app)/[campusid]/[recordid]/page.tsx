import { SinglePointMap } from "@/components/maps/single-point";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getRecord, getCoordinate } from "@/lib/record";

export default async function Campus({
  params: { recordid },
}: {
  params: { recordid: string };
}) {
  const record = await getRecord(recordid);
  const location = await getCoordinate(record!.parsed_location!);

  if (!record) {
    return <div>Record not found</div>;
  }

  return (
    <>
      <div className="flex h-screen items-center justify-center max-w-screen-xl mx-auto">
        <div className="mt-16 sm:space-x-2 flex flex-col sm:flex-row">
          <div className="max-sm:pb-1 sm:w-1/2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Record Details<Badge>UC San Diego</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-2 space-y-2">
                <RecordLine label="Case Number" value={record.case_number} />
                <RecordLine label="Incident Type" value={record.incident} />
                <RecordLine label="Location" value={record.location} />
                <RecordLine
                  label="Date Reported"
                  value={record.date_reported}
                />
                <div className="flex flex-col justify-center">
                  <h2 className="font-semibold">Date/Time Occured</h2>
                  <p className="font-mono">
                    {record.date_occurred} {record.time_occurred}
                  </p>
                </div>
                <RecordLine label="Summary" value={record.summary} />
                <RecordLine label="Disposition" value={record.disposition} />
              </CardContent>
            </Card>
          </div>
          {location?.longitude && location?.latitude ? (
            <Card className="flex grow">
              <SinglePointMap
                latitude={location!.latitude!}
                longitude={location!.longitude!}
                zoom={15.5}
              />
            </Card>
          ) : (
            <Card className="flex flex-grow items-center justify-center">
              <p className="text-lg font-semibold">
                No coordinate data available.
              </p>
            </Card>
          )}
        </div>
      </div>
    </>
  );
}

const RecordLine = ({
  label,
  value,
}: {
  label: string;
  value: string | null;
}) => (
  <div className="flex flex-col justify-center">
    <h2 className="font-semibold">{label}</h2>
    <p className="font-mono">{value}</p>
  </div>
);

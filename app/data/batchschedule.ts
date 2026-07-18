export type Batch = {
	startDate: string;
	endDate: string;
};

export type BatchSchedule = {
	courseName: string;
	may2026: Batch;
	jun2026: Batch;
	jul2026: Batch;
	sep2026: Batch;
	oct2026: Batch;
	nov2026: Batch;
};

const empty: Batch = { startDate: "", endDate: "" };

export const batchScheduleData: BatchSchedule[] = [
	{
		courseName: "Diploma in Hotel and Tourism Management",
		may2026: { startDate: "03-May-2026", endDate: "03-Jan-2027" },
		jun2026: { startDate: "14-Jun-2026", endDate: "14-Feb-2027" },
		jul2026: { startDate: "26-Jul-2026", endDate: "26-Mar-2027" },
		sep2026: { startDate: "06-Sep-2026", endDate: "06-May-2027" },
		oct2026: { startDate: "18-Oct-2026", endDate: "18-Jun-2027" },
		nov2026: { startDate: "29-Nov-2026", endDate: "29-Jul-2027" },
	},
	{
		courseName: "Advanced Diploma in Hospitality Management",
		may2026: { startDate: "03-May-2026", endDate: "03-Mar-2027" },
		jun2026: { startDate: "14-Jun-2026", endDate: "14-Apr-2027" },
		jul2026: { startDate: "26-Jul-2026", endDate: "26-May-2027" },
		sep2026: { startDate: "06-Sep-2026", endDate: "06-Jul-2027" },
		oct2026: { startDate: "18-Oct-2026", endDate: "18-Aug-2027" },
		nov2026: { startDate: "29-Nov-2026", endDate: "29-Sep-2027" },
	},
	{
		courseName: "Diploma in Caregiving (SAT)",
		may2026: { startDate: "02-May-2026", endDate: "02-Jan-2027" },
		jun2026: { startDate: "13-Jun-2026", endDate: "13-Feb-2027" },
		jul2026: { startDate: "25-Jul-2026", endDate: "25-Mar-2027" },
		sep2026: { startDate: "05-Sep-2026", endDate: "05-May-2027" },
		oct2026: { startDate: "17-Oct-2026", endDate: "17-Jun-2027" },
		nov2026: { startDate: "28-Nov-2026", endDate: "28-Jul-2027" },
	},
	{
		courseName: "Diploma in Caregiving (AM)",
		may2026: { startDate: "03-May-2026", endDate: "03-Jan-2027" },
		jun2026: { startDate: "14-Jun-2026", endDate: "14-Feb-2027" },
		jul2026: { startDate: "26-Jul-2026", endDate: "26-Mar-2027" },
		sep2026: { startDate: "06-Sep-2026", endDate: "06-May-2027" },
		oct2026: { startDate: "18-Oct-2026", endDate: "18-Jun-2027" },
		nov2026: { startDate: "29-Nov-2026", endDate: "29-Jul-2027" },
	},
	{
		courseName: "Diploma in Caregiving (PM)",
		may2026: { startDate: "03-May-2026", endDate: "03-Jan-2027" },
		jun2026: { startDate: "14-Jun-2026", endDate: "14-Feb-2027" },
		jul2026: { startDate: "26-Jul-2026", endDate: "26-Mar-2027" },
		sep2026: { startDate: "06-Sep-2026", endDate: "06-May-2027" },
		oct2026: { startDate: "18-Oct-2026", endDate: "18-Jun-2027" },
		nov2026: { startDate: "29-Nov-2026", endDate: "29-Jul-2027" },
	},
	{
		courseName: "Advanced Diploma in Nursing Aide",
		may2026: { startDate: "03-May-2026", endDate: "03-Mar-2027" },
		jun2026: { startDate: "14-Jun-2026", endDate: "14-Apr-2027" },
		jul2026: { startDate: "26-Jul-2026", endDate: "26-May-2027" },
		sep2026: { startDate: "06-Sep-2026", endDate: "06-Jul-2027" },
		oct2026: { startDate: "18-Oct-2026", endDate: "18-Aug-2027" },
		nov2026: { startDate: "29-Nov-2026", endDate: "29-Sep-2027" },
	},
	{
		courseName: "Diploma in Human Resource Management (E-Learning) — Wed",
		may2026: { startDate: "15-Apr-2026", endDate: "15-Dec-2026" },
		jun2026: { startDate: "27-May-2026", endDate: "27-Jan-2027" },
		jul2026: { startDate: "08-Jul-2026", endDate: "08-Mar-2027" },
		sep2026: { startDate: "19-Aug-2026", endDate: "19-Apr-2027" },
		oct2026: { startDate: "30-Sep-2026", endDate: "30-May-2027" },
		nov2026: { startDate: "11-Nov-2026", endDate: "11-Jul-2027" },
	},
	{
		courseName: "Advanced Diploma in Nursing Care Assistant (E-Learning) — Sat",
		may2026: { startDate: "02-May-2026", endDate: "02-Jan-2027" },
		jun2026: { startDate: "13-Jun-2026", endDate: "13-Feb-2027" },
		jul2026: { startDate: "25-Jul-2026", endDate: "25-Mar-2027" },
		sep2026: { startDate: "05-Sep-2026", endDate: "05-May-2027" },
		oct2026: { startDate: "17-Oct-2026", endDate: "17-Jun-2027" },
		nov2026: { startDate: "28-Nov-2026", endDate: "28-Jul-2027" },
	},
	{
		courseName: "Diploma in Logistics and Supply Chain Management",
		may2026: { startDate: "25-Apr-2026", endDate: "25-Apr-2027" },
		jun2026: { startDate: "20-Jun-2026", endDate: "20-Jun-2027" },
		jul2026: { startDate: "15-Aug-2026", endDate: "15-Aug-2027" },
		sep2026: { startDate: "10-Oct-2026", endDate: "10-Oct-2027" },
		oct2026: { startDate: "05-Dec-2026", endDate: "05-Dec-2027" },
		nov2026: empty,
	},
	{
		courseName: "Diploma in Logistics and Supply Chain Management (E-Learning)",
		may2026: { startDate: "25-Apr-2026", endDate: "25-Apr-2027" },
		jun2026: { startDate: "20-Jun-2026", endDate: "20-Jun-2027" },
		jul2026: { startDate: "15-Aug-2026", endDate: "15-Aug-2027" },
		sep2026: { startDate: "10-Oct-2026", endDate: "10-Oct-2027" },
		oct2026: { startDate: "05-Dec-2026", endDate: "05-Dec-2027" },
		nov2026: empty,
	},
	{
		courseName: "Diploma in Civil Engineering",
		may2026: { startDate: "03-May-2026", endDate: "03-Jan-2027" },
		jun2026: { startDate: "14-Jun-2026", endDate: "14-Feb-2027" },
		jul2026: { startDate: "26-Jul-2026", endDate: "26-Mar-2027" },
		sep2026: { startDate: "06-Sep-2026", endDate: "06-May-2027" },
		oct2026: { startDate: "18-Oct-2026", endDate: "18-Jun-2027" },
		nov2026: { startDate: "29-Nov-2026", endDate: "29-Jul-2027" },
	},
	{
		courseName: "Diploma in Mechanical & Electrical (M&E) Engineering",
		may2026: { startDate: "02-May-2026", endDate: "02-Jan-2027" },
		jun2026: { startDate: "13-Jun-2026", endDate: "13-Feb-2027" },
		jul2026: { startDate: "25-Jul-2026", endDate: "25-Mar-2027" },
		sep2026: { startDate: "05-Sep-2026", endDate: "05-May-2027" },
		oct2026: { startDate: "17-Oct-2026", endDate: "17-Jun-2027" },
		nov2026: { startDate: "28-Nov-2026", endDate: "28-Jul-2027" },
	},
	{
		courseName: "Advanced Diploma in Mechanical & Electrical (M&E) Engineering",
		may2026: { startDate: "03-May-2026", endDate: "03-Jan-2027" },
		jun2026: { startDate: "14-Jun-2026", endDate: "14-Feb-2027" },
		jul2026: { startDate: "26-Jul-2026", endDate: "26-Mar-2027" },
		sep2026: { startDate: "06-Sep-2026", endDate: "06-May-2027" },
		oct2026: { startDate: "18-Oct-2026", endDate: "18-Jun-2027" },
		nov2026: empty,
	},
	{
		courseName: "Diploma in Business Administration (E-Learning)",
		may2026: { startDate: "02-May-2026", endDate: "02-Jan-2027" },
		jun2026: { startDate: "14-Jun-2026", endDate: "14-Feb-2027" },
		jul2026: { startDate: "26-Jul-2026", endDate: "26-Mar-2027" },
		sep2026: { startDate: "06-Sep-2026", endDate: "06-May-2027" },
		oct2026: { startDate: "18-Oct-2026", endDate: "18-Jun-2027" },
		nov2026: { startDate: "29-Nov-2026", endDate: "29-Jul-2027" },
	},
	{
		courseName:
			"Advanced Diploma in Project Coordinator (Building Services & Fire Safety)",
		may2026: { startDate: "03-May-2026", endDate: "03-May-2027" },
		jun2026: { startDate: "28-Jun-2026", endDate: "28-Jun-2027" },
		jul2026: { startDate: "23-Aug-2026", endDate: "23-Aug-2027" },
		sep2026: { startDate: "18-Oct-2026", endDate: "18-Oct-2027" },
		oct2026: { startDate: "13-Dec-2026", endDate: "13-Dec-2027" },
		nov2026: { startDate: "07-Feb-2027", endDate: "07-Feb-2028" },
	},
];

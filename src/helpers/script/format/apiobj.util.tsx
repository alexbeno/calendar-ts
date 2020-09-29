/* ------------------------------ CHECK FORMAT OBJECT ----------------------------- */

interface propsType {
  obj: {
    success: boolean;
    data: any;
  };
}

export const apiobject = (props: propsType) => {
  if (!props.obj.hasOwnProperty('success') || !props.obj.hasOwnProperty('data')) {
    return null;
  }
  if (props.obj.success === false) {
    return null;
  }

  return props.obj.data || null;
};
